import { useState, useEffect } from 'react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-21T00:00:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="font-mono text-xs text-accent-muted uppercase tracking-widest">Releasing April 21, 2026</div>
      <div className="flex gap-3 sm:gap-4 font-mono text-xl sm:text-2xl md:text-3xl font-bold bg-white/5 border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-lg backdrop-blur-sm">
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
          <span>{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-[9px] sm:text-[10px] text-accent-muted uppercase mt-1">Days</span>
        </div>
        <span className="text-white/30">:</span>
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
          <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-[9px] sm:text-[10px] text-accent-muted uppercase mt-1">Hours</span>
        </div>
        <span className="text-white/30">:</span>
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
          <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-[9px] sm:text-[10px] text-accent-muted uppercase mt-1">Mins</span>
        </div>
        <span className="text-white/30">:</span>
        <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
          <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-[9px] sm:text-[10px] text-accent-muted uppercase mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
};
