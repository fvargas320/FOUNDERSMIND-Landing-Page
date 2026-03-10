import { motion } from 'motion/react';
import { ResponsiveGrid } from './ResponsiveGrid';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "FOUNDERSMIND is the first tool that actually lets me compare GPT and Claude side-by-side. The branching feature is a game changer for my research.",
      initials: "SJ",
      name: "Sarah J.",
      role: "AI Researcher"
    },
    {
      quote: "I've tried every AI app out there. FOUNDERSMIND is the only one that feels like it was built for how I actually think and brainstorm.",
      initials: "MT",
      name: "Mark T.",
      role: "Product Designer"
    },
    {
      quote: "Having GPT-4o, Claude, and Gemini in one unified workspace has completely transformed how I work. I never have to switch tabs again.",
      initials: "ER",
      name: "Elena R.",
      role: "Software Engineer"
    }
  ];

  return (
    <section className="px-8 md:px-16 py-24 max-w-[1400px] mx-auto border-t border-white/5">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Loved by power users</h2>
        <p className="text-accent-muted text-lg">Join thousands of researchers, writers, and developers who have upgraded their AI workflow.</p>
      </div>

      <ResponsiveGrid columns={3}>
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col justify-between"
          >
            <p className="text-lg font-light italic mb-8">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-mono font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-accent-muted text-xs font-mono uppercase tracking-wider">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </ResponsiveGrid>
    </section>
  );
}
