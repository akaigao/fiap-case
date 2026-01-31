import { Course, CategoryInfo, CourseCategory } from '@/types';

export const categories: CategoryInfo[] = [
  {
    id: 'TECNOLOGIA',
    label: 'Tecnologia',
    sectionTitle: 'Tecnologia',
  },
  {
    id: 'INOVACAO',
    label: 'Inovação',
    sectionTitle: 'Inovação',
  },
  {
    id: 'NEGOCIOS',
    label: 'Negócios',
    sectionTitle: 'Negócios',
  },
];

export const courses: Course[] = [
  // TECNOLOGIA
  {
    id: 'tech-1',
    title: 'Big Data Ecosystem',
    description: 'Orquestração de pipelines de dados',
    category: 'TECNOLOGIA',
    tags: ['REMOTO', 'LIVE'],
  },
  {
    id: 'tech-2',
    title: 'Creating Dashboards for BI',
    description: 'Criação de dashboards para Business Intelligence',
    category: 'TECNOLOGIA',
    tags: ['REMOTO', 'LIVE', 'MULTIMIDIA'],
  },
  {
    id: 'tech-3',
    title: 'Big Data Science - Machine Learning & Data Mining',
    description: 'Aprenda a usar machine learning e data mining para analisar dados',
    category: 'TECNOLOGIA',
    tags: ['REMOTO', 'LIVE'],
  },
  {
    id: 'tech-4',
    title: 'Storytelling',
    description: 'Aprenda a criar histórias impactantes com dados',
    category: 'TECNOLOGIA',
    tags: ['REMOTO', 'LIVE', 'MULTIMIDIA'],
  },
  // INOVACAO
  {
    id: 'inov-1',
    title: 'UX',
    description: 'Aprenda a criar experiências de usuário intuitivas e envolventes',
    category: 'INOVACAO',
    tags: ['REMOTO', 'LIVE'],
  },
  {
    id: 'inov-2',
    title: 'UX Writing',
    description: 'Aprenda a escrever texto para interfaces de usuário',
    category: 'INOVACAO',
    tags: ['REMOTO'],
  },
  {
    id: 'inov-3',
    title: 'Chatbots',
    description: 'Aprenda a criar chatbots para atender aos seus clientes',
    category: 'INOVACAO',
    tags: ['REMOTO', 'LIVE', 'MULTIMIDIA'],
  },
  // NEGOCIOS
  {
    id: 'neg-1',
    title: 'Agile Culture',
    description: 'Gestão estratégica para líderes',
    category: 'NEGOCIOS',
    tags: ['LIVE'],
  },
  {
    id: 'neg-2',
    title: 'DPO Data Protection Officer',
    description: 'Gestão de proteção de dados',
    category: 'NEGOCIOS',
    tags: ['REMOTO', 'LIVE'],
  },
  {
    id: 'neg-3',
    title: 'IT Business Partner',
    description: 'Gestão de negócios para IT',
    category: 'NEGOCIOS',
    tags: ['REMOTO', 'LIVE', 'MULTIMIDIA'],
  },
  {
    id: 'neg-4',
    title: 'Perícia Forense Computacional',
    description: 'Aprenda a analisar evidências digitais em casos judiciais',
    category: 'NEGOCIOS',
    tags: ['REMOTO', 'LIVE', 'MULTIMIDIA'],
  },
  {
    id: 'neg-5',
    title: 'Growth Hacking',
    description: 'Aprenda a usar metodologias ágeis e tradicionais para crescer seu negócio',
    category: 'NEGOCIOS',
    tags: ['REMOTO'],
  },
];

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter((course) => course.category === category);
}
