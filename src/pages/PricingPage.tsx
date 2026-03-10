import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Countdown } from '../components/Countdown';

export const PricingPage = () => {
  return (
    <div className="pt-[15vh] pb-24 min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Simple, transparent pricing.</h1>
        <p className="text-accent-muted text-lg md:text-xl">
          FOUNDERSMIND is built for power users. Start for free, upgrade when you need the cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        {/* Free Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 flex flex-col"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="text-4xl font-extrabold mb-4">$0<span className="text-lg text-accent-muted font-normal">/forever</span></div>
            <p className="text-accent-muted text-sm mb-6 h-10">Perfect for individuals who want to supercharge their workflow with AI.</p>
          </div>
          <ul className="flex flex-col gap-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Markdown Editor</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Variant Branching System</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Access to standard AI models</li>
            <li className="flex items-center gap-3 text-sm"><Check size={16} className="text-white" /> Unlimited workspace storage</li>
          </ul>
          <div className="w-full flex justify-center py-2">
            <Countdown />
          </div>
        </motion.div>

        {/* Pro Plan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white text-black rounded-2xl p-8 lg:p-12 flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-b-lg font-mono text-xs font-bold tracking-widest uppercase">
            Coming Soon
          </div>
          <div className="mb-8 mt-4">
            <h3 className="text-2xl font-bold mb-2">Pro Workflows</h3>
            <div className="text-4xl font-extrabold mb-4">$20<span className="text-lg text-black/50 font-normal">/month</span></div>
            <p className="text-black/70 text-sm mb-6 h-10">For founders who need frontier cloud models and team sync.</p>
          </div>
          <ul className="flex flex-col gap-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Everything in Starter</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Cloud Models (GPT-4o, Claude 3.5)</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> End-to-End Encrypted Sync</li>
            <li className="flex items-center gap-3 text-sm font-medium"><Check size={16} className="text-black" /> Custom AI Skills</li>
          </ul>
          <div className="w-full flex justify-center py-2">
            <Countdown />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
