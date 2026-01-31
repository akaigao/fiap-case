import { NavigationConfig } from '@/types';

export const navigationConfig: NavigationConfig = {
  links: [
    {
      id: 'nav-home',
      label: 'Home',
      href: '#header',
      sectionId: 'header',
    },
    {
      id: 'nav-sobre',
      label: 'Sobre',
      href: '#intro',
      sectionId: 'intro',
    },
    {
      id: 'nav-cursos',
      label: 'Cursos',
      href: '#cursos',
      sectionId: 'cursos',
    },
    {
      id: 'nav-faq',
      label: 'FAQ',
      href: '#faq',
      sectionId: 'faq',
    },
  ],
  logo: {
    src: '/svgs/logo-fiap.svg',
    alt: 'FIAP',
  },
};
