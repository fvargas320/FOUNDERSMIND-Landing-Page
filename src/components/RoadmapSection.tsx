import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const RoadmapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const phases = [
    {
      voltage: "",
      title: "Synapse Core",
      status: "Phase_01 // March 2026",
      desc: "Local-first Markdown workspace with AI Copilot. Multi-tab editing, wikilinks, daily notes, full-text search, and frontier AI integration (GPT, Claude, Gemini)."
    },
    {
      voltage: "",
      title: "Pro Workflows",
      status: "Phase_02 // May 2026",
      desc: "Advanced context management with Context Groups and brain.json. Enhanced AI workflows with inline variants, diff review, and project-aware intelligence."
    },
    {
      voltage: "",
      title: "Cross-Platform",
      status: "Phase_03 // July 2026",
      desc: "Mobile companion app with full sync. Cross-device functionality, plugin architecture, and seamless workspace access from anywhere."
    }
  ];

  return (
    <section className="px-4 md:px-16 py-32 max-w-[1400px] mx-auto relative cursor-crosshair" id="roadmap">
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">The Journey Ahead</h2>
        <p className="text-accent-muted text-lg">We're building the ultimate workspace for founders. Here's where we are and where we're going.</p>
      </div>

      <div className="relative pt-12 md:pt-24" ref={containerRef}>
        {/* The Horizontal Trace (Background) */}
        <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/20 to-transparent opacity-50"></div>
        
        {/* Scroll Progress Filament */}
        <motion.div 
          className="hidden md:block absolute top-[40px] left-0 h-[1px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 origin-left"
          style={{ width: lineWidth }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {phases.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
              className="relative group flex flex-col"
            >
              {/* Junction point */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[-60px] w-[9px] h-[9px] bg-black border border-white/20 rounded-full z-20 transition-all duration-500 group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-150"></div>
              
              {/* Vertical connector line */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[-51px] w-[1px] h-[51px] bg-white/20 group-hover:bg-white/50 transition-colors duration-500"></div>

              <div className="flex flex-col items-center text-center mb-6">
                {p.voltage && <span className="font-mono text-[11px] text-accent-muted mb-2">{p.voltage}</span>}
                <h3 className="text-2xl font-extrabold tracking-[-0.02em] uppercase">{p.title}</h3>
              </div>

              <div className="flex-1 bg-obsidian-glass/80 p-6 md:p-8 border border-white/10 rounded-2xl backdrop-blur-md relative overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-10 h-10 bg-[linear-gradient(45deg,transparent_50%,rgba(255,255,255,0.1)_50%)]"></div>
                
                <p className="text-accent-muted text-sm md:text-[0.95rem] mb-8 leading-relaxed flex-1">
                  {p.desc}
                </p>
                
                <div className="inline-block font-mono text-[10px] px-3 py-1.5 border border-white/10 text-white uppercase self-start">
                  {p.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Coordinates */}
      <div className="absolute bottom-0 right-4 md:right-16 font-mono text-[10px] text-accent-muted/50 tracking-[0.2em] [writing-mode:vertical-rl] pointer-events-none">
        40.7128° N, 74.0060° W // SYNC_ACTIVE
      </div>
    </section>
  );
}
