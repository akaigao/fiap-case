'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQItem as FAQItemType } from '@/types';
import styles from '../FAQ.module.scss';

interface FAQItemProps {
  item: FAQItemType;
}

export function FAQItem({ item }: FAQItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isExpanded = isHovered || isActive;

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={styles.faqItem}
      data-hovered={isExpanded}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={item.question}
    >
      <motion.div
        className={styles.indicator}
        initial={{ scaleX: 0.15 }}
        animate={{ scaleX: isExpanded ? 1 : 0.15 }}
        style={{ transformOrigin: 'left' }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      <h3 className={styles.question}>{item.question}</h3>
      <motion.p
        className={styles.answer}
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {item.answer}
      </motion.p>
    </div>
  );
}
