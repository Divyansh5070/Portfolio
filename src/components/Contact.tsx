import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Mail, Download } from "lucide-react";
import { PageContainer } from "./PageContainer";

export function Contact() {
  return (
    <section className="py-24 w-full relative z-10">
      <PageContainer>
      {/* Background aura behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative overflow-hidden bg-zinc-950/20 border border-zinc-900/60 p-12 md:p-20 rounded-[2.5rem] backdrop-blur-sm flex flex-col items-center text-center group hover:border-cyan-500/25 transition-colors duration-500"
      >
        {/* Soft glowing mesh gradient inside card */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="p-4 rounded-full bg-cyan-950/20 border border-cyan-900/30 text-cyan-400 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
          <Mail className="w-8 h-8" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 max-w-2xl leading-tight">
          Let's craft something amazing together
        </h2>
        
        <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl font-sans leading-relaxed">
          Whether you have a new app idea, need performance optimizations, or want to modernize your current mobile architecture, I'd love to chat.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a 
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
          >
            Say Hello
          </motion.a>
          <motion.a
            href={personalInfo.resume}
            download={personalInfo.resumeFileName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-700 text-white font-bold text-lg hover:border-cyan-500/40 hover:bg-zinc-900/50 transition-colors cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Resume
          </motion.a>
        </div>
      </motion.div>
      </PageContainer>
    </section>
  );
}
