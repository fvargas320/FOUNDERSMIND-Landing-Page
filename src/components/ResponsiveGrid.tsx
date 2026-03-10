import React, { useRef, useState } from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export const ResponsiveGrid = ({ children, columns = 3 }: ResponsiveGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const childWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
    const gap = 16; // 1rem gap
    const itemWidth = childWidth + gap;
    
    if (itemWidth > 0) {
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const childWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
    const gap = 16;
    const itemWidth = childWidth + gap;
    scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
  };

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <>
      {/* Desktop View */}
      <div className={`hidden md:grid ${gridColsClass} gap-8`}>
        {children}
      </div>

      {/* Mobile View (Carousel) */}
      <div className="md:hidden flex flex-col gap-6 w-full">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory w-[100vw] relative left-1/2 -translate-x-1/2 px-4 pb-4 [&::-webkit-scrollbar]:hidden gap-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {childrenArray.map((child, i) => (
            <div key={i} className="w-[85vw] flex-shrink-0 snap-center flex items-stretch">
              <div className="w-full h-full">
                {child}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {childrenArray.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white w-6' : 'bg-white/20 w-1.5'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
