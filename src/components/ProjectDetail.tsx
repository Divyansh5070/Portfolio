import { motion } from "motion/react";
import { X, Github, AppWindow } from "lucide-react";
import type { Project } from "../types";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const accent =
    project.demoData?.accentColor ||
    (project.type === "Android"
      ? "#22c55e"
      : project.type === "iOS"
      ? "#22d3ee"
      : "#6366f1");

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex justify-center items-start overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative max-w-5xl w-full mx-4 my-10 bg-zinc-950/90 border border-zinc-800/80 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", stiffness: 210, damping: 26 }}
      >
        {/* Accent glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 10% 0%, ${accent}33 0, transparent 55%), radial-gradient(circle at 90% 100%, #22c55e11 0, transparent 55%)`,
          }}
        />

        {/* Header */}
        <div className="relative px-6 sm:px-8 pt-6 sm:pt-7 pb-4 border-b border-zinc-800/70 bg-gradient-to-b from-zinc-900/80 to-zinc-950/60">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 mb-1">
                Case Study
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="px-2.5 py-1 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-[10px] font-semibold tracking-wide uppercase">
                  {project.type}
                </span>
                {project.details?.timeline && (
                  <span className="px-2.5 py-1 rounded-full bg-zinc-900/80 text-[11px] text-zinc-300 border border-zinc-800/80">
                    {project.details.timeline}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-2 rounded-full bg-zinc-900/80 border border-zinc-700/70 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-colors"
              aria-label="Close project details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative px-6 sm:px-8 py-6 sm:py-7 space-y-8">
          {/* Image gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-4">
              <p className="text-xs font-semibold text-zinc-400 tracking-[0.24em] uppercase">
                Screens
              </p>
              <div className="flex gap-4 overflow-x-auto pb-1 -mx-2 px-2 scrollbar-hide">
                {project.images.map((src, index) => (
                  <motion.div
                    key={src}
                    className="relative shrink-0 w-[200px] sm:w-[220px] aspect-[9/19.5] rounded-2xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-lg shadow-black/40"
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} screen ${index + 1}`}
                      className="w-full h-full object-contain object-top bg-zinc-950"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Role / stack */}
          {(project.details?.role ||
            project.details?.stackSummary ||
            project.technologies.length > 0) && (
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-400 tracking-[0.24em] uppercase">
                  Role & Focus
                </p>
                {project.details?.role && (
                  <p className="text-sm text-zinc-200">{project.details.role}</p>
                )}
                {project.details?.stackSummary && (
                  <p className="text-xs text-zinc-400 mt-1">
                    {project.details.stackSummary}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-400 tracking-[0.24em] uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-[11px] text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Challenges / solutions / learnings */}
          <div className="grid gap-6 md:grid-cols-3">
            {project.details?.challenges && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-400 tracking-[0.24em] uppercase">
                  Challenges
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {project.details.challenges.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.details?.solutions && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-400 tracking-[0.24em] uppercase">
                  Solutions
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {project.details.solutions.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.details?.learnings && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-zinc-400 tracking-[0.24em] uppercase">
                  What I learned
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {project.details.learnings.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Links */}
          {(project.links.github || project.links.appStore) && (
            <div className="pt-2 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex flex-wrap gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-300">
                      View source code
                    </span>
                  </a>
                )}
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                  >
                    <AppWindow className="w-4 h-4" />
                    <span className="underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-300">
                      View live app
                    </span>
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

