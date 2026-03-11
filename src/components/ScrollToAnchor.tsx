import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const yOffset = -100; // Offset for fixed navbar

      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 20; // ~1s at 50ms

      const tryScroll = () => {
        if (cancelled) return;
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return;
        }

        if (attempts++ < maxAttempts) {
          setTimeout(tryScroll, 50);
        }
      };

      // Delay a beat to allow route/content render
      const timer = setTimeout(tryScroll, 0);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return null;
};
