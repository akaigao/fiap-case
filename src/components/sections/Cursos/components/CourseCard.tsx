'use client';

import { Button, Icon } from '@/components/global';
import { Course } from '@/types';
import styles from '../Cursos.module.scss';

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.cardIcon}>{course.icon}</div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardDescription}>{course.description}</p>
        {course.duration && (
          <span className={styles.cardDuration}>{course.duration}</span>
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        rightIcon={<Icon name="arrow-right" size={16} />}
        className={styles.cardButton}
      >
        Saiba mais
      </Button>
    </article>
  );
}
