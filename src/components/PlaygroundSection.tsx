import { motion } from 'motion/react';

export const PlaygroundSection = () => {
  return (
    <section className="px-8 md:px-16 py-24 max-w-[1400px] mx-auto border-t border-white/5">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">The Playground for AI</h2>
        <p className="text-accent-muted text-lg">Access the world's most powerful models in a single, unified interface designed for deep work.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Multi-Model Switching */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 lg:p-12 flex flex-col justify-between"
        >
          <div className="mb-12">
            <div className="font-mono text-xs text-[#666] tracking-widest uppercase mb-4">FOUNDERSMIND / Multi-Model</div>
            <h3 className="text-3xl font-bold mb-4">Multi-Model<br/>Switching</h3>
            <p className="text-accent-muted">Access GPT, Claude, Gemini, and more in one place. Switch models mid-conversation to compare outputs and find the best AI for your specific task.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full border border-white/20 font-mono text-xs bg-white text-black">GPT-4o</span>
            <span className="px-4 py-2 rounded-full border border-white/20 font-mono text-xs">Claude 3.5 Sonnet</span>
            <span className="px-4 py-2 rounded-full border border-white/20 font-mono text-xs">Gemini 1.5 Pro</span>
          </div>
        </motion.div>

        {/* Conversation Branching */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 lg:p-12 flex flex-col justify-between"
        >
          <div className="mb-12">
            <div className="font-mono text-xs text-[#666] tracking-widest uppercase mb-4">FOUNDERSMIND / Branching</div>
            <h3 className="text-3xl font-bold mb-4">Conversation<br/>Branching</h3>
            <p className="text-accent-muted">Fork your discussions at any point. Explore different directions without losing the context of your original chat. Perfect for creative brainstorming.</p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-xs text-accent-muted flex flex-col gap-3">
            <div className="text-white">user: Let's branch here for a new idea.</div>
            <div className="border-l-2 border-white/20 pl-4 py-2 flex flex-col gap-2">
              <div className="text-[#888]">FoundersMind: BRANCH CREATED</div>
              <div className="text-white bg-white/10 inline-block px-2 py-1 rounded w-max">ACTIVE</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
