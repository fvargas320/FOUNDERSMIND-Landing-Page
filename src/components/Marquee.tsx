export const Marquee = () => {
  const items = [
    "LOCAL-FIRST", "PRIVACY-FOCUSED", "MARKDOWN", "AI ASSISTANT", "VARIANT SYSTEM", "DAILY NOTES", "KEYBOARD-FIRST"
  ];

  return (
    <div className="overflow-hidden py-8 md:py-16 whitespace-nowrap border-t border-white/5 mt-8 md:mt-16 flex">
      <div className="inline-block animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="font-mono text-2xl md:text-6xl font-extrabold mr-8 md:mr-16 opacity-10 hover:opacity-100 hover:text-white transition-opacity duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
