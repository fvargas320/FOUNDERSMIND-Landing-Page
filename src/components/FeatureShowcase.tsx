import { motion } from 'motion/react';
import { FileText, MessageSquare, GitBranch, Terminal } from 'lucide-react';

export const FeatureShowcase = () => {
  return (
    <section id="features" className="px-4 md:px-16 py-12 md:py-24 max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-32">
      
      {/* Feature 1: The Workspace */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
            <FileText size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">A workspace built for deep work.</h2>
          <p className="text-base md:text-lg text-accent-muted leading-relaxed mb-6 md:mb-8">
            Write in pure, portable Markdown. FoundersMind organizes your files with zero latency, instant search, and local-first architecture. Your ideas stay on your machine—no cloud dependency.
          </p>
          <ul className="flex flex-col gap-3 font-mono text-sm text-accent-muted">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Keyboard-first command palette</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Instant full-text search</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Daily notes & quick capture</li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-[1.2] w-full"
        >
          <div className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl min-h-[300px] md:h-[400px] flex gap-4 md:gap-6">
            <div className="w-1/3 border-r border-white/5 pr-4 flex flex-col gap-3 font-mono text-[10px] md:text-xs text-accent-muted">
              <div className="text-white mb-2">EXPLORER</div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer truncate">📄 Q3_Strategy.md</div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-2 py-1 rounded cursor-pointer truncate">📄 Pitch_Deck_Draft.md</div>
              <div className="flex items-center gap-2 hover:text-white cursor-pointer truncate">📄 Daily_Log.md</div>
            </div>
            <div className="flex-1 font-mono text-xs md:text-sm leading-relaxed text-[#aaa]">
              <h3 className="text-white text-lg md:text-xl font-sans font-bold mb-4"># Pitch Deck Draft</h3>
              <p className="mb-4">The problem we are solving is the fragmentation of the founder's workflow.</p>
              <p className="mb-4">Currently, founders use Notion for docs, ChatGPT for brainstorming, and local files for drafts.</p>
              <p className="text-white/40 animate-pulse">Type '/' for commands...</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature 2: Contextual AI */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
            <MessageSquare size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">AI with real project context.</h2>
          <p className="text-base md:text-lg text-accent-muted leading-relaxed mb-6 md:mb-8">
            FoundersMind connects directly to the world's most capable frontier models. Chat with file, folder, or project scope using brain.json and Context Groups to keep AI aligned with your goals.
          </p>
          <ul className="flex flex-col gap-3 font-mono text-sm text-accent-muted mb-6">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Project-aware AI via brain.json</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Context Groups for curated briefs</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> GPT-4o, Claude 3.5, Gemini 1.5 Pro</li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-[1.2] w-full"
        >
          <div className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl min-h-[300px] md:h-[400px] flex flex-col">
            <div className="flex gap-2 mb-6 pb-4 border-b border-white/5">
              <span className="px-3 py-1 rounded-full border border-white/20 font-mono text-xs bg-white text-black flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div> Claude 3.5 Sonnet</span>
              <span className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-accent-muted opacity-50 flex items-center gap-1">GPT-4o</span>
            </div>
            <div className="flex-1 flex flex-col gap-6 font-mono text-sm overflow-hidden">
              <div className="flex flex-col gap-2">
                <div className="text-accent-muted">user</div>
                <div className="text-white bg-white/5 p-3 rounded-lg border border-white/10">Based on my Q3_Strategy.md, what should be the main focus of this pitch deck?</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-accent-muted flex items-center gap-2"><Terminal size={14} /> FoundersMind</div>
                <div className="text-[#aaa] leading-relaxed">
                  I've reviewed <span className="text-white underline decoration-white/30">Q3_Strategy.md</span>. Your core focus is expanding local-first capabilities. For the pitch deck, you should emphasize the "Absolute Privacy" angle, as it differentiates you from cloud-based competitors.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature 3: Variant System */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
            <GitBranch size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">Branch your thoughts. Explore every direction.</h2>
          <p className="text-base md:text-lg text-accent-muted leading-relaxed mb-6 md:mb-8">
            Don't like where a draft is going? Fork it. The Variant System lets you explore multiple iterations side-by-side, compare selections, and merge the best parts—without losing your original.
          </p>
          <ul className="flex flex-col gap-3 font-mono text-sm text-accent-muted">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Visual Board view for variants</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Side-by-side comparison</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50"></span> Automatic file history & restore</li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-[1.2] w-full relative"
        >
          <div className="bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-8 shadow-2xl min-h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden">
            {/* Abstract Branching Visual */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm">
              <div className="bg-obsidian-deep border border-white/20 p-4 rounded-xl w-full text-center font-mono text-sm shadow-lg">
                Original Draft
              </div>
              
              <div className="flex justify-between w-full relative">
                {/* Connecting Lines */}
                <div className="absolute top-[-32px] left-1/2 w-[2px] h-[32px] bg-white/20 -translate-x-1/2"></div>
                <div className="absolute top-[-16px] left-[25%] right-[25%] h-[2px] bg-white/20"></div>
                <div className="absolute top-[-16px] left-[25%] w-[2px] h-[16px] bg-white/20"></div>
                <div className="absolute top-[-16px] right-[25%] w-[2px] h-[16px] bg-white/20"></div>

                <div className="bg-white text-black border border-white/20 p-4 rounded-xl w-[45%] text-center font-mono text-sm shadow-[0_0_30px_rgba(255,255,255,0.2)] transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                  Variant A: Stealth
                </div>
                <div className="bg-obsidian-deep border border-white/20 p-4 rounded-xl w-[45%] text-center font-mono text-sm shadow-lg transform rotate-2 hover:rotate-0 transition-transform cursor-pointer text-accent-muted">
                  Variant B: Chaos
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
