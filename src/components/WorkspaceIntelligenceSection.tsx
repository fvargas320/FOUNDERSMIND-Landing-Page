import { motion } from 'motion/react';
import { Search, BrainCircuit, Network } from 'lucide-react';

export const WorkspaceIntelligenceSection = () => {
  return (
    <section id="intelligence" className="px-8 md:px-16 py-24 max-w-[1400px] mx-auto border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">Context is Everything.<br/><span className="text-accent-muted">Your AI already<br/>knows your project.</span></h2>
          <p className="text-lg text-accent-muted mb-8 max-w-lg">
            Stop copy-pasting documents into chat windows. FOUNDERSMIND automatically indexes your entire markdown workspace. When you ask a question, the AI instantly retrieves the relevant notes, drafts, and research to give you perfectly contextualized answers.
          </p>
          <ul className="flex flex-col gap-4 font-mono text-sm">
            <li className="flex items-center gap-3"><Search size={18} className="text-white" /> Instant semantic search across all files</li>
            <li className="flex items-center gap-3"><BrainCircuit size={18} className="text-white" /> Automatic context retrieval (RAG)</li>
            <li className="flex items-center gap-3"><Network size={18} className="text-white" /> Cross-document reasoning and synthesis</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="font-mono text-sm font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                Workspace Indexed
              </div>
              <div className="font-mono text-xs text-accent-muted">GPT-4o Active</div>
            </div>
            <div className="font-mono text-sm text-accent-muted">
              <span className="text-white">"Synthesizing Q3 Strategy and Pitch Deck..."</span>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs opacity-70"><Search size={12} /> Found 3 relevant documents</div>
                <div className="flex items-center gap-2 text-xs opacity-70"><BrainCircuit size={12} /> Extracting key arguments</div>
                <div className="flex items-center gap-2 text-xs text-white"><Network size={12} /> Generating comprehensive response</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
