'use client';

import { motion } from 'framer-motion';
import { CategoryInfo } from '@/types';
import styles from './TabButton.module.scss';

interface TabButtonProps {
  category: CategoryInfo;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ category, isActive, onClick }: TabButtonProps) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={styles.tabButton}
      data-active={isActive}
    >
      {isActive && (
        <motion.span
          layoutId="tab-indicator"
          className={styles.indicator}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 35,
          }}
        />
      )}
      <span className={styles.label}>{category.label}</span>
    </button>
  );
}
