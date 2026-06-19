import { motion } from "motion/react";
import { personalInfo } from "../data";
import { ArrowRight, Download, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { PageContainer } from "./PageContainer";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 22, stiffness: 120 },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const SKILLS = [
  "Kotlin", "Swift", "Jetpack Compose", "SwiftUI",
  "Firebase", "MVVM", "REST APIs", "C++", "Java", "SQL",
];

const STATS = [
  { value: "2+",  label: "Years Building" },
  { value: "4+",  label: "Apps Shipped" },
  { value: "100+", label: "Active Users" },
];

export function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-[92vh] flex flex-col justify-center w-full py-24 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/3 left-[10%] w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── LEFT: text ─────────────────────────────── */}
          <div className="flex flex-col">

            {/* Available badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-800 text-xs font-semibold text-zinc-300 w-fit mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Open to new opportunities
            </motion.div>

            {/* Name */}
            <motion.p variants={item} className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-3">
              Hey there, I'm
            </motion.p>
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl xl:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] mb-4"
            >
              Divyansh<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 animate-gradient">
                Sharma.
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={item} className="text-lg text-zinc-300 font-medium mb-6">
              Android &amp; iOS Engineer
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-zinc-400 text-base leading-relaxed max-w-lg mb-6"
            >
              Software Engineering student at Chandigarh University, passionate about 
              building <span className="text-zinc-200 font-medium">native mobile apps</span> that 
              solve real problems. I shipped{" "}
              <span className="text-zinc-200 font-medium">CUEats</span> to the Play Store — a 
              full-stack campus food app used by 100+ students — and I'm now expanding 
              into <span className="text-zinc-200 font-medium">iOS with Swift &amp; SwiftUI</span>.
            </motion.p>

            {/* Meta info */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                Kota, Rajasthan
              </span>
              <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-600" />
                Chandigarh University, B.E. CS '27
              </span>
              <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                <Briefcase className="w-3.5 h-3.5 text-zinc-600" />
                Founding Dev @ CUEats
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-bold hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                See My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resume}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-zinc-700 text-white text-sm font-bold hover:border-cyan-500/50 hover:bg-zinc-900/60 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              {/* Socials */}
              <div className="flex items-center gap-2 ml-1">
                {personalInfo.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all hover:scale-110 active:scale-95"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: card ────────────────────────────── */}
          <motion.div variants={item} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">

              {/* Card */}
              <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl p-7 shadow-2xl shadow-black/50">

                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                {/* Avatar placeholder with initials */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white font-display shadow-lg shadow-cyan-900/30 shrink-0">
                    DS
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-950" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base">Divyansh Sharma</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Android &amp; iOS Engineer</p>
                    <p className="text-xs text-zinc-600 mt-0.5">Chandigarh University</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {STATS.map(({ value, label }) => (
                    <div key={label} className="text-center p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                      <p className="text-xl font-bold text-white font-display">{value}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-zinc-800/60 mb-5" />

                {/* Skills */}
                <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-xs font-medium border border-zinc-800 bg-zinc-900/50 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
              </div>

              {/* Floating glow behind card */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-600/8 to-indigo-600/8 blur-xl translate-y-2" />
            </div>
          </motion.div>

        </div>
      </PageContainer>
    </motion.section>
  );
}
