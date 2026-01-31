'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CategoryInfo, Course } from '@/types';
import { AccordionIcon } from './AccordionIcon';
import { MobileCourseItem } from './MobileCourseItem';
import styles from './AccordionCategory.module.scss';

interface AccordionCategoryProps {
  category: CategoryInfo;
  courses: Course[];
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionCategory({
  category,
  courses,
  isOpen,
  onToggle,
}: AccordionCategoryProps) {
  return (
    <div className={styles.category}>
      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${category.id}`}
      >
        <span className={styles.categoryName}>{category.label.toUpperCase()}</span>
        <AccordionIcon isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${category.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.content}>
              {courses.map((course) => (
                <MobileCourseItem key={course.id} course={course} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
