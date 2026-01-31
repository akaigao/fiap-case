'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './WaterTransition.module.scss';

const TOTAL_FRAMES = 192;
const FRAME_PATH = '/imgs/water';

function getFramePath(frameIndex: number): string {
  const paddedIndex = frameIndex.toString().padStart(3, '0');
  return `${FRAME_PATH}/water_${paddedIndex}.jpg`;
}

export function WaterTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const preloadCount = Math.min(10, TOTAL_FRAMES);
      const promises = [];

      for (let i = 0; i < preloadCount; i++) {
        const img = new window.Image();
        img.src = getFramePath(i);
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
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;

      const startPoint = windowHeight;
      const endPoint = -containerHeight;
      const totalDistance = startPoint - endPoint;
      const currentPosition = startPoint - rect.top;

      const progress = Math.max(0, Math.min(1, currentPosition / totalDistance));
      const frame = Math.floor(progress * (TOTAL_FRAMES - 1));

      setCurrentFrame(Math.max(0, Math.min(TOTAL_FRAMES - 1, frame)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  return (
    <section ref={containerRef} className={styles.waterTransition}>
      <div className={styles.frameContainer}>
        {isLoaded && (
          <Image
            src={getFramePath(currentFrame)}
            alt=""
            fill
            className={styles.frame}
            priority
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
}
