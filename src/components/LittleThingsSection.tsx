import { motion } from 'motion/react';
import { Sparkles, GitCompare, History, LayoutTemplate, MessageSquare, SlidersHorizontal } from 'lucide-react';
import { ResponsiveGrid } from './ResponsiveGrid';

export const LittleThingsSection = () => {
  const features = [
    {
      icon: <Sparkles size={24} />,
      title: "Inline Variant Selection",
      desc: "Select text, hit a quick action, and FoundersMind generates 3 different AI rewrites displayed inline."
    },
    {
      icon: <GitCompare size={24} />,
      title: "Diff Review",
      desc: "Side-by-side CodeMirror panes with line-level diff highlighting. Accept, discard, or edit before applying."
    },
    {
      icon: <History size={24} />,
      title: "Version History",
      desc: "Automatic snapshots before AI actions, on significant edits, and on tab switches. Browse and restore anytime."
    },
    {
      icon: <LayoutTemplate size={24} />,
      title: "Note Templates",
      desc: "Daily Notes (Alt+D), Ideas, and Specs with frontmatter. New notes default to your Inbox."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "WYSIWYG Callout Tiles",
      desc: "Callout syntax rendered as beautiful card blocks. The raw markdown is hidden — you see styled, collapsible cards with visual polish."
    },
    {
      icon: <SlidersHorizontal size={24} />,
      title: "Fully Customizable",
      desc: "Font family, size, line height, content width, accent color, high contrast mode — all configurable."
    }
  ];

  return (
    <section className="px-8 md:px-16 py-24 max-w-[1400px] mx-auto border-t border-white/5">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">The little things that matter</h2>
        <p className="text-accent-muted text-lg">FOUNDERSMIND is packed with features that make your workflow feel like magic.</p>
      </div>

      <ResponsiveGrid columns={3}>
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="h-full bg-obsidian-glass border border-white/10 backdrop-blur-md rounded-xl p-8 hover:border-white/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-accent-muted text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </ResponsiveGrid>
    </section>
  );
}
