import { motion } from 'motion/react';
import { BookOpen, PenTool, Network, Briefcase } from 'lucide-react';
import { ResponsiveGrid } from './ResponsiveGrid';

export const WorkflowSection = () => {
  return (
    <section id="workspace" className="px-8 md:px-16 py-24 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Built for Every Workflow</h2>
        <p className="text-accent-muted text-lg max-w-2xl">FOUNDERSMIND adapts to your unique way of thinking, whether you're a founder, writer, or researcher.</p>
      </div>

      <ResponsiveGrid columns={2}>
        {/* Technical Research */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col gap-6"
        >
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-accent-muted">
            <div className="text-white mb-2">[1] Deep Learning Trends</div>
            <div className="mb-2">"Comparing transformer architectures for local inference..."</div>
            <div className="text-[#888] border-t border-white/10 pt-2 mt-2">
              <span className="text-white">FoundersMind Synthesis:</span> Switching to Claude 3.5 provided a more nuanced analysis of the attention mechanism.
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><BookOpen size={20} /> Technical Research</h3>
            <p className="text-accent-muted text-sm">Compare model outputs side-by-side, extract key findings, and build a structured knowledge base.</p>
          </div>
        </motion.div>

        {/* Creative Writing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col gap-6"
        >
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-accent-muted flex flex-col gap-2 relative">
            <div className="text-white">Plot Idea: The Heist</div>
            <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-4 py-1">
               <div className="w-2 h-2 rounded-full bg-white/50"></div> Branch A: Stealth
            </div>
            <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-4 py-1">
               <div className="w-2 h-2 rounded-full bg-white/50"></div> Branch B: Chaos
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><PenTool size={20} /> Creative Writing</h3>
            <p className="text-accent-muted text-sm">Explore different plotlines simultaneously. Branch your narrative to see where different choices lead.</p>
          </div>
        </motion.div>

        {/* Visual Brainstorming */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col gap-6"
        >
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-accent-muted h-[120px] flex items-center justify-center relative">
             <div className="absolute w-24 h-[1px] bg-white/20 rotate-45"></div>
             <div className="absolute w-24 h-[1px] bg-white/20 -rotate-45"></div>
             <div className="bg-obsidian-deep border border-white/20 px-3 py-1 rounded-md z-10 -translate-x-10 -translate-y-6">Idea 1</div>
             <div className="bg-obsidian-deep border border-white/20 px-3 py-1 rounded-md z-10 translate-x-10 translate-y-6">Idea 2</div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Network size={20} /> Visual Brainstorming</h3>
            <p className="text-accent-muted text-sm">Build a dense network of interconnected thoughts. Watch concepts link together automatically on the canvas.</p>
          </div>
        </motion.div>

        {/* Job Applications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col gap-6"
        >
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-accent-muted flex flex-col gap-2 relative h-[120px] justify-center">
            <div className="text-white text-center mb-2 z-10 relative">Base_Resume.md</div>
            
            {/* Branching lines */}
            <div className="absolute top-[40px] left-1/2 w-[2px] h-[20px] bg-white/20 -translate-x-1/2"></div>
            <div className="absolute top-[60px] left-[20%] right-[20%] h-[2px] bg-white/20"></div>
            <div className="absolute top-[60px] left-[20%] w-[2px] h-[15px] bg-white/20"></div>
            <div className="absolute top-[60px] left-1/2 w-[2px] h-[15px] bg-white/20 -translate-x-1/2"></div>
            <div className="absolute top-[60px] right-[20%] w-[2px] h-[15px] bg-white/20"></div>

            <div className="flex justify-between w-full mt-4 z-10 relative px-2">
              <div className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 rounded text-[10px]">Google SWE</div>
              <div className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-1 rounded text-[10px]">Amazon SWE</div>
              <div className="bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-1 rounded text-[10px]">Reddit SWE</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Briefcase size={20} /> Job Applications</h3>
            <p className="text-accent-muted text-sm">Create a master resume and branch it into perfectly tailored variants for every company you apply to.</p>
          </div>
        </motion.div>
      </ResponsiveGrid>
    </section>
  );
}
