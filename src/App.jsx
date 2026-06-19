import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { personalInfo } from './data';
import { PageContainer } from './components/PageContainer';


export default function App() {

  return (
    <div className="bg-[#030303] text-zinc-50 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">

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
