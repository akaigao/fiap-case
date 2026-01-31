'use client';

import { motion } from 'framer-motion';
import styles from './AccordionIcon.module.scss';

interface AccordionIconProps {
  isOpen: boolean;
}

export function AccordionIcon({ isOpen }: AccordionIconProps) {
  return (
    <motion.div
      className={styles.iconContainer}
      animate={{
        backgroundColor: isOpen ? '#ED145B' : 'transparent',
        borderColor: '#ED145B',
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className={styles.icon}
        animate={{
          rotate: isOpen ? 180 : 0,
          color: isOpen ? '#000000' : '#ED145B',
        }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? '−' : '+'}
      </motion.span>
    </motion.div>
  );
}
