import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const SLIDE_MS = 4500;

export function ProjectScreenshotCarousel({
  images,
  title,
  accentColor,
  onOpen,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length <= 1 || paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [images.length, paused, reduceMotion]);

  const goTo = (i) => {
    setIndex(i);
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative group outline-none flex flex-col items-center"
      aria-label={`View ${title} screenshots`}
    >
      <div
        className="absolute inset-[-48px] rounded-full blur-[90px] -z-10 opacity-40 group-hover:opacity-65 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="project-screenshot project-screenshot__stage"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {images.map((src, i) => {
          const isActive = i === index;
          return (
            <motion.img
              key={src}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className="project-screenshot__slide"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.96,
                zIndex: isActive ? 2 : 1,
              }}
              transition={{
                opacity: { duration: reduceMotion ? 0 : 0.85, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: reduceMotion ? 0 : 1.1, ease: [0.4, 0, 0.2, 1] },
              }}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            />
          );
        })}
      </motion.div>

      {images.length > 1 && (
        <div className="mt-6 w-full max-w-[300px] space-y-3">
          {/* Auto-advance progress */}
          {!reduceMotion && (
            <div className="h-0.5 w-full rounded-full bg-zinc-800/80 overflow-hidden">
              <motion.div
                key={`${index}-${paused}`}
                className="h-full rounded-full origin-left"
                style={{ backgroundColor: accentColor }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0.35 : 1 }}
                transition={{
                  duration: paused ? 0.3 : SLIDE_MS / 1000,
                  ease: paused ? "easeOut" : "linear",
                }}
              />
            </div>
          )}

          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                className="p-1 rounded-full"
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${
                    i === index ? "w-7" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                  }`}
                  style={i === index ? { backgroundColor: accentColor } : undefined}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </button>
  );
}
