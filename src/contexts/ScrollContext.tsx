'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

interface ScrollContextValue {
  scrollY: number;
  scrollProgress: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
  scrollThreshold?: number;
}

export function ScrollProvider({
  children,
  scrollThreshold = 50,
}: ScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;

    setScrollY(currentScrollY);
    setScrollProgress(Math.min(100, Math.max(0, progress)));

    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('up');
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const value: ScrollContextValue = {
    scrollY,
    scrollProgress,
    scrollDirection,
    isScrolled: scrollY > scrollThreshold,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll(): ScrollContextValue {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}
