import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Longer delay to ensure DOM is fully ready and animations complete
      const timer = setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100; // Offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return null;
};
