'use client';

import { CategoryInfo, CourseCategory } from '@/types';
import { TabButton } from './TabButton';
import styles from './TabNavigation.module.scss';

interface TabNavigationProps {
  categories: CategoryInfo[];
  activeCategory: CourseCategory;
  onCategoryChange: (category: CourseCategory) => void;
}

export function TabNavigation({
  categories,
  activeCategory,
  onCategoryChange,
}: TabNavigationProps) {
  return (
    <div role="tablist" className={styles.tabNavigation}>
      {categories.map((category) => (
        <TabButton
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
        />
      ))}
    </div>
  );
}
