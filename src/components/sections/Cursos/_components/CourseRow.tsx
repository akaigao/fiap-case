'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types';
import styles from './CourseRow.module.scss';

interface CourseRowProps {
  course: Course;
  index: number;
}

export function CourseRow({ course, index }: CourseRowProps) {
  return (
    <motion.article
      className={styles.courseRow}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
    >
      <h4 className={styles.title}>{course.title}</h4>
      <div className={styles.tags}>
        <span className={styles.tag}>
          {course.tags.join(' • ')}
        </span>
      </div>
    </motion.article>
  );
}
