import { motion } from 'motion/react';
import { Terminal, FileText, GitBranch, MessageSquare, Search } from 'lucide-react';

export const CanvasSection = () => {
  return (
    <section className="px-8 md:px-16 py-16 flex flex-col lg:flex-row gap-8 mb-40 max-w-[1600px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-[2] bg-obsidian-glass border border-white/10 backdrop-blur-[20px] rounded-xl p-8 relative shadow-[0_40px_100px_rgba(0,0,0,0.5)] hover:border-white/30 transition-colors duration-500 h-[600px] overflow-hidden flex flex-col"
      >
        {/* Mockup Header */}
        <div className="flex gap-4 mb-8 pb-4 border-b border-white/5">
          <div className="font-mono text-xs px-3 py-1.5 border border-white/20 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all">workspace/</div>
          <div className="font-mono text-xs px-3 py-1.5 border border-white/20 rounded-full cursor-pointer bg-white text-black transition-all">Q3_Strategy.md</div>
          <div className="font-mono text-xs px-3 py-1.5 border border-white/20 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all">variants/</div>
        </div>

        {/* Mockup Body */}
        <div className="flex gap-8 h-full">
          {/* Sidebar */}
          <div className="w-48 hidden md:flex flex-col gap-4 border-r border-white/5 pr-4">
            <div className="flex items-center gap-2 text-accent-muted hover:text-white cursor-pointer text-sm"><FileText size={16} /> Daily Notes</div>
            <div className="flex items-center gap-2 text-white cursor-pointer text-sm"><GitBranch size={16} /> Variants</div>
            <div className="flex items-center gap-2 text-accent-muted hover:text-white cursor-pointer text-sm"><Search size={16} /> Search</div>
            <div className="flex items-center gap-2 text-accent-muted hover:text-white cursor-pointer text-sm"><MessageSquare size={16} /> FoundersMind AI</div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 font-mono text-sm text-[#aaa] leading-relaxed relative">
            <p className="text-white mb-4 text-lg font-sans font-semibold"># Q3 Product Strategy</p>
            <p className="mb-4">The core focus for Q3 is expanding the local-first capabilities while introducing the new variant branching system.</p>
            <p className="mb-8"><span className="text-[#888]">// AI Suggestion: Consider highlighting the privacy benefits here.</span></p>
            
            <div className="bg-white/5 p-4 rounded-md border border-white/10 mb-4">
              <p className="text-white mb-2 flex items-center gap-2"><Terminal size={14} /> FoundersMind</p>
              <p>I've analyzed your previous launch notes. Would you like me to draft a variant of this section emphasizing the "no cloud dependency" aspect?</p>
            </div>

            <p>To weave this into a narrative for the landing page: "Your ideas, securely stored on your machine." <span className="inline-block w-2 h-[18px] bg-white ml-1 animate-pulse"></span></p>

            {/* Inline Note UI */}
            <div className="absolute -right-12 top-24 w-[250px] rotate-3 z-10 bg-obsidian-glass border border-white/10 backdrop-blur-[20px] rounded-xl p-4 shadow-2xl hidden lg:block">
              <p className="font-mono text-[0.6rem] text-[#555] mb-2 uppercase tracking-wider">Variant A</p>
              <p className="text-sm font-sans text-white/90">"Focus on the speed of local file access compared to cloud alternatives."</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-obsidian-glass border border-white/10 backdrop-blur-[20px] rounded-xl p-8 relative shadow-2xl hover:border-white/30 transition-colors duration-500"
        >
          <h4 className="font-mono text-xs mb-4 text-[#666] tracking-widest uppercase">Variant System</h4>
          <p className="font-sans text-white/80 leading-relaxed">Branch documents like a tree. Explore multiple content iterations side-by-side without losing your original thought process.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1], delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-obsidian-glass border border-white/10 backdrop-blur-[20px] rounded-xl p-8 relative shadow-2xl hover:border-white/30 transition-colors duration-500"
        >
          <h4 className="font-mono text-xs mb-4 text-[#666] tracking-widest uppercase">Contextual AI</h4>
          <p className="font-sans text-white/80 leading-relaxed">FoundersMind reads your entire local workspace. It understands your project context, past notes, and current goals.</p>
        </motion.div>
      </div>
    </section>
  );
}
