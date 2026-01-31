import { Course } from '@/types';
import styles from './MobileCourseItem.module.scss';

interface MobileCourseItemProps {
  course: Course;
}

function formatTags(tags: Course['tags']): string {
  const tagLabels: Record<string, string> = {
    REMOTO: 'REMOTO',
    LIVE: 'LIVE',
    MULTIMIDIA: 'MULTIMÍDIA',
  };

  const formattedTags = tags.map((tag) => tagLabels[tag] || tag);

  if (formattedTags.length <= 2) {
    return formattedTags.join(' · ');
  }

  const [first, second, ...rest] = formattedTags;
  return `${first} · ${second} + ${rest.join(' + ')}`;
}

export function MobileCourseItem({ course }: MobileCourseItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.label}>{formatTags(course.tags)}</span>
      <h4 className={styles.title}>{course.title}</h4>
    </div>
  );
}
