import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

const PLANE_SPRING = { damping: 18, stiffness: 220, mass: 0.55 };

export function PaperPlaneCursor({ disabled }) {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const planeX = useSpring(mouseX, PLANE_SPRING);
  const planeY = useSpring(mouseY, PLANE_SPRING);

  const vX = useVelocity(planeX);
  const vY = useVelocity(planeY);
  const speed = useTransform([vX, vY], ([x, y]) => Math.hypot(x, y));

  // Nose points toward the cursor (plane lags behind and "flies" to catch up)
  const rotate = useTransform(
    [planeX, planeY, mouseX, mouseY],
    ([px, py, mx, my]) => (Math.atan2(my - py, mx - px) * 180) / Math.PI
  );

  const planeScale = useTransform(speed, [0, 600, 1200], [1, 1.08, 1.18]);
  const wingTilt = useTransform(speed, [0, 800], [0, -12]);

  useEffect(() => {
    if (disabled) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [disabled, mouseX, mouseY]);

  if (disabled) return null;

  return (
    <div className="paper-plane-cursor hidden md:block" aria-hidden>
      {/* Soft contrail */}
      <motion.div
        className="paper-plane-cursor__trail"
        style={{
          opacity: visible ? 0.5 : 0,
          x: planeX,
          y: planeY,
          rotate,
        }}
      />

      <motion.div
        className="paper-plane-cursor__plane"
        style={{
          opacity: visible ? 1 : 0,
          x: planeX,
          y: planeY,
          rotate,
          scale: planeScale,
        }}
      >
        <motion.svg
          viewBox="0 0 64 64"
          width="44"
          height="44"
          fill="none"
          style={{ rotate: wingTilt }}
          className="paper-plane-cursor__svg"
        >
          <path
            d="M4 32L58 8L38 32L58 56L4 32Z"
            fill="url(#planeFill)"
            stroke="rgba(34,211,238,0.9)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M38 32L58 8L58 56L38 32Z"
            fill="rgba(99,102,241,0.35)"
          />
          <path
            d="M4 32L38 32"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="planeFill" x1="4" y1="8" x2="58" y2="56">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
}
