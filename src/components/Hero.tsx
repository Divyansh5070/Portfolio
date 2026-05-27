import { motion } from "motion/react";
import { personalInfo } from "../data";
import { ArrowRight, Smartphone, Code, Download } from "lucide-react";
import { PageContainer } from "./PageContainer";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 120
      }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[90vh] flex flex-col justify-center w-full py-20 relative"
    >
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <PageContainer className="relative">
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/60 border border-zinc-900 text-xs font-semibold text-zinc-300 w-fit mb-8 shadow-sm backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Available for new projects
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.1]"
      >
        Crafting Native <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 animate-gradient">
          Mobile Experiences.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-zinc-400 mt-6 max-w-3xl xl:max-w-4xl font-sans leading-relaxed"
      >
        Hi, I'm {personalInfo.name}. {personalInfo.bio}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-5 mt-10"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 duration-200 shadow-md hover:shadow-cyan-500/10"
        >
          View Work
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={personalInfo.resume}
          download={personalInfo.resumeFileName}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950/50 border border-zinc-800 text-white font-bold hover:border-cyan-500/40 hover:bg-zinc-900/80 transition-all hover:scale-105 active:scale-95 duration-200"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
        <div className="flex items-center gap-3">
          {personalInfo.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-950/40 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/60 hover:scale-105 transition-all active:scale-95 duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Mini Feature Banner */}
      <motion.div 
        variants={itemVariants}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/30 border border-zinc-900/60 backdrop-blur-sm hover:border-cyan-500/20 hover:bg-zinc-900/20 transition-all duration-300 group cursor-default">
           <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-900/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
             <Smartphone className="w-6 h-6" />
           </div>
           <div>
             <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">Native Performance</h3>
             <p className="text-sm text-zinc-400 mt-1 leading-relaxed">Building high-performance iOS and Android apps using Swift and Kotlin.</p>
           </div>
        </div>
        
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/30 border border-zinc-900/60 backdrop-blur-sm hover:border-indigo-500/20 hover:bg-zinc-900/20 transition-all duration-300 group cursor-default">
           <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-900/30 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-all duration-300">
             <Code className="w-6 h-6" />
           </div>
           <div>
             <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">Modern Architecture</h3>
             <p className="text-sm text-zinc-400 mt-1 leading-relaxed">Implementing MVVM, clean architecture, and reactive programming.</p>
           </div>
        </div>
      </motion.div>
      </PageContainer>
    </motion.section>
  );
}
