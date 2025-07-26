import { useEffect, useState } from 'react';

export function useIsSmallScreen(breakpoint = 768) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => {
      console.log(window.innerWidth, breakpoint);
      setIsSmall(window.innerWidth < breakpoint);
    };

    check(); // check immediately on mount
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isSmall;
}

export function useIsMediumScreen(min = 768, max = 1024) {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMedium(window.innerWidth >= min && window.innerWidth < max);
    };

    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [min, max]);

  return isMedium;
}