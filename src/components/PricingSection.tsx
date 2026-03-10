import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ResponsiveGrid } from './ResponsiveGrid';
import { Countdown } from './Countdown';

export const PricingSection = () => {
  return (
    <section className="px-8 md:px-16 py-24 max-w-[1400px] mx-auto border-t border-white/5 mb-32">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Simple, transparent pricing</h2>
        <p className="text-accent-muted text-lg">FOUNDERSMIND is built for power users. Choose the plan that fits your workflow.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ResponsiveGrid columns={2}>
          {/* Free Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 flex flex-col"
          >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-accent-muted text-sm mb-6 h-10">Perfect for individuals who want local-first productivity.</p>
            <div className="text-5xl font-extrabold mb-2">$0<span className="text-xl text-accent-muted font-normal">/ forever</span></div>
          </div>
          
          <ul className="flex flex-col gap-4 mb-12 flex-1">
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Local-first Markdown workspace</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Multi-tab editing & wikilinks</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Full-text search</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Local LLM connectors (Qwen 2.5, etc.)</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Basic variant branching</li>
          </ul>

          <div className="w-full flex justify-center py-2">
            <Countdown />
          </div>
        </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-full bg-white text-black rounded-2xl p-8 lg:p-12 flex flex-col relative overflow-hidden"
          >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-b-lg font-mono text-xs font-bold tracking-widest uppercase">
            Most Popular
          </div>
          
          <div className="mb-8 mt-4">
            <h3 className="text-2xl font-bold mb-2">FOUNDERSMIND Pro</h3>
            <p className="text-[#666] text-sm mb-6 h-10">For power users who need elite models and advanced features.</p>
            <div className="text-5xl font-extrabold mb-2">$19.99<span className="text-xl text-[#666] font-normal">/ month</span></div>
          </div>
          
          <ul className="flex flex-col gap-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Unlimited GPT-4o & Claude 3.5</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Advanced Multi-Model Switching</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Unlimited Branching</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Full Canvas Mode Features</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Encrypted Cloud Sync</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Global Search Across All Data</li>
          </ul>

          <div className="bg-black/5 p-4 rounded-lg mb-8 border border-black/10">
            <p className="text-xs font-mono text-[#444]"><span className="font-bold text-black">Pro Perk:</span> Get early access to new models like DeepSeek-V3 and Kimi as soon as they are integrated.</p>
          </div>

          <div className="w-full flex justify-center py-2">
            <Countdown />
          </div>
          </motion.div>
        </ResponsiveGrid>
      </div>
    </section>
  );
}
