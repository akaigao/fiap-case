'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import styles from './Header.module.scss';

const slideDown = {
  initial: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export function Header() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="header" className={styles.header}>
      <div className={styles.watermark} aria-hidden="true">
        <motion.div
          initial={slideDown.initial}
          animate={isVisible ? slideDown.visible : slideDown.initial}
          transition={{ ...slideDown.transition, delay: 0.5 }}
        >
          SOBRE
        </motion.div>``
      </div>
      <div ref={ref} className={styles.content}>
        <h1 className={styles.title}>
          <motion.span
            data-first-line="true"
            initial={slideDown.initial}
            animate={isVisible ? slideDown.visible : slideDown.initial}
            transition={{ ...slideDown.transition, delay: 0 }}
            style={{ display: 'block' }}
          >
            A melhor faculdade
          </motion.span>
          <motion.span
            initial={slideDown.initial}
            animate={isVisible ? slideDown.visible : slideDown.initial}
            transition={{ ...slideDown.transition, delay: 0.25 }}
            style={{ display: 'block' }}
          >
            de tecnologia
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
