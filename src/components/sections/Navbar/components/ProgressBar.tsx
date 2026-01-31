'use client';

import { useScrollProgress } from '@/hooks';
import styles from '../Navbar.module.scss';

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className={styles.progressBar} data-at-top={progress === 0}>
      <div
        className={styles.progressFill}
        style={{ transform: `scaleX(${progress / 100})` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
