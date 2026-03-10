import { motion } from 'motion/react';

export const FeatureGrid = () => {
  const features = [
    {
      title: "Branching Ideas",
      desc: "Explore multiple content iterations with a visual tree view. Never lose a good idea just because you went in a different direction."
    },
    {
      title: "Project Context AI",
      desc: "FoundersMind isn't just a chatbot. It reads your entire workspace, understanding your business model, past notes, and current goals."
    },
    {
      title: "Absolute Privacy",
      desc: "Everything is stored locally on your machine. No cloud dependency, no telemetry, no reading your proprietary business ideas."
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 mx-8 md:mx-16 my-16">
      {features.map((f, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-obsidian-deep p-8 md:p-16 hover:bg-[#080808] transition-colors duration-500"
        >
          <h3 className="font-mono text-lg mb-4 uppercase">{f.title}</h3>
          <p className="text-accent-muted text-sm font-light leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
