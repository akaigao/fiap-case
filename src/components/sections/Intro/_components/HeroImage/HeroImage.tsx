'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styles from './HeroImage.module.scss';

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const clipPathVariants = {
    hidden: {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0% 0 0 0)',
      opacity: 1,
    },
  };

  return (
    <div ref={ref} className={styles.container}>
      <motion.div
        className={styles.imageWrapper}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={prefersReducedMotion ? undefined : clipPathVariants}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
        }}
        style={prefersReducedMotion ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className={styles.image}
          priority
        />
      </motion.div>
    </div>
  );
}
