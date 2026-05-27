import { motion } from "motion/react";
import { experiences, skills } from "../data";
import { Briefcase, Layers } from "lucide-react";
import { PageContainer } from "./PageContainer";

export function Experience() {
  const getSkillColor = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("swift") || s.includes("ios") || s.includes("coredata") || s.includes("healthkit")) {
      return { dot: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]", border: "hover:border-cyan-500/30 hover:bg-cyan-950/10 text-cyan-200" };
    }
    if (s.includes("kotlin") || s.includes("android") || s.includes("room") || s.includes("jetpack")) {
      return { dot: "bg-emerald-400 shadow-[0_0_6px_#34d399]", border: "hover:border-emerald-500/30 hover:bg-emerald-950/10 text-emerald-200" };
    }
    if (s.includes("react") || s.includes("typescript") || s.includes("redux") || s.includes("graphql") || s.includes("rest")) {
      return { dot: "bg-indigo-400 shadow-[0_0_6px_#818cf8]", border: "hover:border-indigo-500/30 hover:bg-indigo-950/10 text-indigo-200" };
    }
    return { dot: "bg-purple-400 shadow-[0_0_6px_#c084fc]", border: "hover:border-purple-500/30 hover:bg-purple-950/10 text-purple-200" };
  };

  return (
    <section className="py-24 w-full border-t border-zinc-900/60 relative z-10">
      <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24">
        
        {/* Experience List */}
        <div>
          <h2 className="text-3xl font-bold font-display text-white mb-12 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            Experience
          </h2>
          
          <div className="relative pl-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-indigo-500 before:content-[''] space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute left-[-32px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-[3px] border-cyan-400 flex items-center justify-center z-10">
                  <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping group-hover:bg-cyan-400/80 transition-colors"></span>
                </div>
                
                {/* Experience Card */}
                <div className="bg-zinc-950/30 border border-zinc-900/60 p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-500/20 hover:bg-zinc-900/10 transition-all duration-300">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1.5">{exp.duration}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{exp.role}</h3>
                  <h4 className="text-sm font-medium text-zinc-400 mt-0.5 mb-4">{exp.company}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold font-display text-white mb-12 flex items-center gap-3">
            <Layers className="w-6 h-6 text-indigo-400" />
            Skills & Stack
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => {
              const { dot, border } = getSkillColor(skill);
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    delay: index * 0.04 
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/40 border border-zinc-900 text-zinc-300 font-medium ${border} cursor-default hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`}></span>
                  {skill}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      </PageContainer>
    </section>
  );
}
