'use client';

import { motion, useTransform, useReducedMotion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import styles from './ScrollText.module.scss';

interface ScrollTextProps {
  scrollProgress: MotionValue<number>;
  row1Text: string;
  row2Text: string;
}

export function ScrollText({ scrollProgress, row1Text, row2Text }: ScrollTextProps) {
  const prefersReducedMotion = useReducedMotion();

  const row1X = useTransform(scrollProgress, [0, 1], ['0vw', '-30vw']);
  const row2X = useTransform(scrollProgress, [0, 1], ['0vw', '30vw']);

  const repeatedRow1 = Array(5).fill(row1Text).join(' ');
  const repeatedRow2 = Array(5).fill(row2Text).join(' ');

  if (prefersReducedMotion) {
    return (
      <div className={styles.container} aria-label={`${row1Text}. ${row2Text}`}>
        <div className={styles.row} aria-hidden="true">
          <span className={styles.text}>{repeatedRow1}</span>
        </div>
        <div className={styles.row} aria-hidden="true">
          <span className={styles.text}>{repeatedRow2}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} aria-label={`${row1Text}. ${row2Text}`}>
      <motion.div
        className={styles.row}
        style={{ x: row1X }}
        aria-hidden="true"
      >
        <span className={styles.text}>{repeatedRow1}</span>
      </motion.div>
      <motion.div
        className={styles.row}
        style={{ x: row2X }}
        aria-hidden="true"
      >
        <span className={styles.text}>{repeatedRow2}</span>
      </motion.div>
    </div>
  );
}
