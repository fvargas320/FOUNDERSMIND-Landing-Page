import { motion } from 'motion/react';
import { Countdown } from './Countdown';
import PreviewImage from '../Images/Preview.png';

export const Hero = () => {
  return (
    <section className="px-4 md:px-16 max-w-[1400px] mx-auto mb-16 md:mb-32 pt-4 md:pt-8">
      <div className="flex flex-col items-center text-center mb-8 md:mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold tracking-[-0.04em] leading-[0.95] bg-gradient-to-b from-white to-[#666] bg-clip-text text-transparent mb-6 md:mb-8 max-w-5xl"
        >
          The AI workspace that thinks like a founder.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-[600px] text-base md:text-lg text-accent-muted font-light leading-relaxed mb-8 md:mb-10"
        >
          Local-first Markdown workspace with AI that understands your entire project. Branch ideas, manage variants, and chat with context using GPT-4o, Claude 3.5, and Gemini—all in one seamless workspace.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <Countdown />
        </motion.div>
      </div>

      {/* Product App Mockup Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.2, 1, 0.3, 1], delay: 0.4 }}
        className="relative w-full perspective-[2000px] z-10"
        id="demo"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none rounded-[32px]"></div>
        <div className="transform md:rotate-x-[2deg] md:scale-[0.98] hover:rotate-x-0 hover:scale-100 transition-all duration-700 ease-out shadow-[0_0_100px_rgba(255,255,255,0.05)] rounded-2xl md:rounded-[32px] overflow-hidden">
          <img
            src={PreviewImage}
            alt="FoundersMind App Preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
