'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseWaterAnimationOptions {
  totalFrames: number;
  framePath: string;
  preloadCount?: number;
}

interface UseWaterAnimationReturn {
  currentFrame: number;
  isLoaded: boolean;
  progress: number;
}

export function useWaterAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  options: UseWaterAnimationOptions
): UseWaterAnimationReturn {
  const { totalFrames, framePath, preloadCount = 10 } = options;

  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload initial frames
  useEffect(() => {
    const preloadImages = async () => {
      const count = Math.min(preloadCount, totalFrames);
      const promises = [];

      for (let i = 1; i <= count; i++) {
        const img = new Image();
        img.src = `${framePath}/${i}.webp`;
        promises.push(
          new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
        );
      }

      await Promise.all(promises);
      setIsLoaded(true);
    };

    preloadImages();
  }, [framePath, preloadCount, totalFrames]);

  // Handle scroll-based frame updates
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || !isLoaded) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerHeight = rect.height;

    // Calculate scroll progress
    const startPoint = windowHeight;
    const endPoint = -containerHeight;
    const totalDistance = startPoint - endPoint;
    const currentPosition = startPoint - rect.top;

    const scrollProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
    setProgress(scrollProgress);

    const frame = Math.floor(scrollProgress * (totalFrames - 1)) + 1;
    setCurrentFrame(Math.max(1, Math.min(totalFrames, frame)));
  }, [containerRef, isLoaded, totalFrames]);

  useEffect(() => {
    if (!isLoaded) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isLoaded]);

  return { currentFrame, isLoaded, progress };
}
