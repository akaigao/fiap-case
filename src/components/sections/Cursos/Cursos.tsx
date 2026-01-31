'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container } from '@/components/global';
import { useIntersectionObserver, useIsMobile } from '@/hooks';
import { categories, getCoursesByCategory } from '@/data/courses';
import { CourseCategory } from '@/types';
import { cn } from '@/utils';
import { TabNavigation, CourseList } from './_components';
import { CursosMobile } from './CursosMobile';
import styles from './Cursos.module.scss';

export function Cursos() {
  const [activeCategory, setActiveCategory] =
    useState<CourseCategory>('TECNOLOGIA');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const isMobile = useIsMobile();

  if (isMobile) {
    return <CursosMobile />;
  }

  const filteredCourses = getCoursesByCategory(activeCategory);
  const activeCategoryInfo = categories.find((c) => c.id === activeCategory);

  return (
    <section id="cursos" className={styles.cursos}>
      <Container>
        <div
          ref={ref}
          className={cn(styles.header, isVisible && styles.visible)}
        >
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>Cursos</h2>
            <span className={styles.subtitle}>Cursos de Curta Duração</span>
          </div>

          <TabNavigation
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <h3 className={cn(styles.categoryTitle, isVisible && styles.visible)}>
          {activeCategoryInfo?.sectionTitle}
        </h3>

        <AnimatePresence mode="wait">
          <CourseList key={activeCategory} courses={filteredCourses} />
        </AnimatePresence>
      </Container>
    </section>
  );
}
