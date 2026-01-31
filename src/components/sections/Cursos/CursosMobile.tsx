'use client';

import { useState } from 'react';
import { Container } from '@/components/global';
import { useIntersectionObserver } from '@/hooks';
import { categories, getCoursesByCategory } from '@/data/courses';
import { CourseCategory } from '@/types';
import { cn } from '@/utils';
import { AccordionCategory } from './_components';
import styles from './CursosMobile.module.scss';

export function CursosMobile() {
  const [openCategory, setOpenCategory] = useState<CourseCategory | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleToggle = (categoryId: CourseCategory) => {
    setOpenCategory((current) => (current === categoryId ? null : categoryId));
  };

  return (
    <section id="cursos" className={styles.cursos}>
      <Container>
        <div
          ref={ref}
          className={cn(styles.header, isVisible && styles.visible)}
        >
          <h2 className={styles.title}>Cursos</h2>
          <span className={styles.subtitle}>Cursos de Curta Duração</span>
        </div>

        <div className={styles.accordionContainer}>
          {categories.map((category) => (
            <AccordionCategory
              key={category.id}
              category={category}
              courses={getCoursesByCategory(category.id)}
              isOpen={openCategory === category.id}
              onToggle={() => handleToggle(category.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
