'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types';
import { CourseRow } from './CourseRow';
import styles from './CourseList.module.scss';

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <motion.div
      className={styles.courseList}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {courses.map((course, index) => (
        <CourseRow key={course.id} course={course} index={index} />
      ))}
    </motion.div>
  );
}
