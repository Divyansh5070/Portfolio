import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Github, AppWindow } from "lucide-react";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectScreenshotCarousel } from "./ProjectScreenshotCarousel";
import { PageContainer } from "./PageContainer";

export function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const getPlatformBadge = (type) => {
    if (type === "iOS") return "bg-cyan-950/25 border-cyan-900/60 text-cyan-400";
    if (type === "Android") return "bg-emerald-950/25 border-emerald-900/60 text-emerald-400";
    return "bg-indigo-950/25 border-indigo-900/60 text-indigo-400";
  };

  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <PageContainer>
      <div className="mb-20">
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mb-6"></div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white">Featured Work</h2>
        <p className="text-zinc-400 mt-4 text-lg max-w-3xl">
          Mobile apps I've designed, built, and shipped — Android & iOS. Click any project to open the full case study with screenshots, stack, and challenges.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => {
          const accent =
            project.demoData?.accentColor ||
            (project.type === "Android"
              ? "#22c55e"
              : project.type === "iOS"
              ? "#22d3ee"
              : "#6366f1");

          const images = project.images ?? [];

          return (
            <div
              key={project.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Screenshot carousel */}
              <motion.div
                className="w-full flex justify-center md:justify-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {images.length > 0 ? (
                  <ProjectScreenshotCarousel
                    images={images}
                    title={project.title}
                    accentColor={accent}
                    onOpen={() => setActiveProject(project)}
                  />
                ) : (
                  <div className="project-screenshot flex items-center justify-center min-h-[400px] text-zinc-500 text-sm rounded-2xl border border-dashed border-zinc-800">
                    Screenshots coming soon
                  </div>
                )}
              </motion.div>

              {/* Project details — aligned to top with title block */}
              <motion.div
                className="w-full flex flex-col items-start text-left pt-2 md:pt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider ${getPlatformBadge(project.type)}`}
                >
                  {project.type}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="group mt-5 w-full text-left"
                >
                  <h3 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 group-hover:text-cyan-400 transition-colors">
                    View full case study
                    <span className="h-px flex-1 max-w-[4rem] bg-zinc-700 group-hover:bg-cyan-400 transition-colors" />
                  </p>
                </button>

                <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 w-full">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-950/40 text-zinc-300 text-sm font-medium rounded-lg border border-zinc-900 hover:border-zinc-800 hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group/link text-sm font-semibold"
                    >
                      <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:origin-left duration-200">
                        View Source
                      </span>
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group/link text-sm font-semibold"
                    >
                      <AppWindow className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:origin-left duration-200">
                        App Store
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
      </PageContainer>
    </section>
  );
}
