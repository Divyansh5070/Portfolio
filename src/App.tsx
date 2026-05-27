import { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from 'motion/react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { personalInfo } from './data';
import { PageContainer } from './components/PageContainer';

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<'free' | 'magnet'>('free');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const particlesRef = useRef<HTMLDivElement | null>(null);
  const lastParticleTs = useRef(0);

  const springConfig = useMemo(
    () => ({ damping: 22, stiffness: 320, mass: 0.45 }),
    []
  );

  // Main cursor follower
  const cursorX = useSpring(targetX, springConfig);
  const cursorY = useSpring(targetY, springConfig);

  // Extra “lag” layer for a richer trailing feel
  const trailX = useSpring(targetX, { damping: 30, stiffness: 160, mass: 0.8 });
  const trailY = useSpring(targetY, { damping: 30, stiffness: 160, mass: 0.8 });

  // Velocity-reactive stretch (feels alive, but still subtle)
  const vX = useVelocity(cursorX);
  const vY = useVelocity(cursorY);
  const speed = useTransform([vX, vY], ([x, y]) => Math.min(900, Math.hypot(x, y)));
  const stretch = useTransform(speed, [0, 900], [1, 1.24]);
  const squish = useTransform(speed, [0, 900], [1, 0.86]);
  const rotate = useTransform([vX, vY], ([x, y]) => (Math.atan2(y, x) * 180) / Math.PI);
  const ringScale = useTransform(speed, [0, 900], [1, 1.08]);
  const magnetScale = useTransform(speed, [0, 900], [1.15, 1.35]);

  useEffect(() => {
    // Disable on touch / coarse pointers to avoid weirdness and save battery.
    const isCoarse = window.matchMedia?.('(pointer: coarse)').matches;
    if (isCoarse || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Store raw client coords; we’ll center via CSS translate.
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (cursorMode === 'free') {
        targetX.set(e.clientX);
        targetY.set(e.clientY);
      }
    };
    const handleEnter = () => setCursorVisible(true);
    const handleLeave = () => setCursorVisible(false);

    const createBurst = (x: number, y: number) => {
      const host = particlesRef.current;
      if (!host) return;
      const count = 10;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'cursor-spark';
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.25;
        const dist = 14 + Math.random() * 22;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.setProperty('--dx', `${dx}px`);
        p.style.setProperty('--dy', `${dy}px`);
        p.style.setProperty('--hue', `${190 + Math.random() * 60}`);
        host.appendChild(p);
        window.setTimeout(() => p.remove(), 520);
      }
    };

    const handleClick = (e: MouseEvent) => {
      createBurst(e.clientX, e.clientY);
      const host = particlesRef.current;
      if (!host) return;
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      host.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    };

    const handleMoveSparks = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastParticleTs.current < 30) return;
      lastParticleTs.current = now;
      const mx = (e as any).movementX ?? 0;
      const my = (e as any).movementY ?? 0;
      const spd = Math.hypot(mx, my);
      if (spd < 18) return;
      const host = particlesRef.current;
      if (!host) return;
      const p = document.createElement('div');
      p.className = 'cursor-trail';
      p.style.left = `${e.clientX}px`;
      p.style.top = `${e.clientY}px`;
      p.style.setProperty('--hue', `${190 + Math.random() * 60}`);
      host.appendChild(p);
      window.setTimeout(() => p.remove(), 420);
    };

    const attachMagnetTo = (el: Element) => {
      const onEnter = () => setCursorMode('magnet');
      const onLeave = () => setCursorMode('free');
      const onMove = () => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        targetX.set(rect.left + rect.width / 2);
        targetY.set(rect.top + rect.height / 2);
      };
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      el.addEventListener('mousemove', onMove);
      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.removeEventListener('mousemove', onMove);
      };
    };

    const selectors =
      'a, button, [role="button"], input, textarea, select, [data-cursor="magnet"]';
    const els = Array.from(document.querySelectorAll(selectors));
    const cleanups = els.map(attachMagnetTo);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMoveSparks, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('mouseenter', handleEnter);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMoveSparks as any);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mouseenter', handleEnter);
      window.removeEventListener('mouseleave', handleLeave);
      cleanups.forEach((fn) => fn());
    };
  }, [cursorMode, mouseX, mouseY, shouldReduceMotion, targetX, targetY]);

  return (
    <div className="bg-[#030303] text-zinc-50 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      {/* Premium Liquid Cursor (Desktop only) */}
      {!shouldReduceMotion && (
        <div className="hidden md:block">
          <div ref={particlesRef} className="pointer-events-none fixed inset-0 z-[60]" />
          {/* Outer glow trail */}
          <motion.div
            className="cursor-fx pointer-events-none fixed top-0 left-0 z-50"
            style={{
              opacity: cursorVisible ? 1 : 0,
              x: trailX,
              y: trailY,
              rotate,
              scaleX: stretch,
              scaleY: squish,
            }}
            transition={{ opacity: { duration: 0.2 } }}
          >
            <div className="cursor-fx__glow" />
          </motion.div>

          {/* Ring */}
          <motion.div
            className="cursor-fx pointer-events-none fixed top-0 left-0 z-50"
            style={{
              opacity: cursorVisible ? 1 : 0,
              x: cursorX,
              y: cursorY,
              rotate,
              scale: cursorMode === 'magnet' ? magnetScale : ringScale,
            }}
            transition={{ opacity: { duration: 0.15 } }}
          >
            <div className="cursor-fx__ring" />
          </motion.div>

          {/* Dot */}
          <motion.div
            className="cursor-fx pointer-events-none fixed top-0 left-0 z-50"
            style={{
              opacity: cursorVisible ? 1 : 0,
              x: cursorX,
              y: cursorY,
            }}
            transition={{ opacity: { duration: 0.1 } }}
          >
            <div className="cursor-fx__dot" />
          </motion.div>
        </div>
      )}

      {/* Floating Ambient Background Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-cyan-600/5 blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute bottom-[25%] right-[5%] w-[450px] h-[450px] rounded-full bg-indigo-600/5 blur-[120px] -z-10"
      />

      {/* Navbar Minimalist - Premium Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/70 backdrop-blur-md border-b border-zinc-900/60 shadow-sm shadow-black/5">
        <PageContainer className="h-16 flex items-center justify-between">
          <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-2 group cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
            DS.
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={personalInfo.resume}
              download={personalInfo.resumeFileName}
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              Resume
            </a>
            {personalInfo.socials.map(social => (
               <a 
                 key={social.label} 
                 href={social.url} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="text-zinc-400 hover:text-white transition-colors text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
               >
                 {social.label}
               </a>
            ))}
          </div>
        </PageContainer>
      </nav>

      <main className="pt-16 relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-zinc-900/60 relative z-10 bg-black/20">
        <PageContainer className="text-center text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </PageContainer>
      </footer>
    </div>
  );
}
