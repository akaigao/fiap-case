export type CourseTag = 'REMOTO' | 'LIVE' | 'MULTIMIDIA';
export type CourseCategory = 'TECNOLOGIA' | 'INOVACAO' | 'NEGOCIOS';

export interface Course {
  id: string;
  title: string;
  description: string;
  duration?: string;
  category: CourseCategory;
  tags: CourseTag[];
}

export interface CategoryInfo {
  id: CourseCategory;
  label: string;
  sectionTitle: string;
}
