'use client';

import styles from './InfiniteMarquee.module.scss';

interface InfiniteMarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
}

export function InfiniteMarquee({
  text,
  direction = 'left',
  speed = 30,
}: InfiniteMarqueeProps) {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={styles.marquee}
      aria-label={text}
      role="marquee"
    >
      <div
        className={`${styles.track} ${direction === 'right' ? styles.reverse : ''}`}
        style={{ animationDuration }}
        aria-hidden="true"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className={styles.text}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
