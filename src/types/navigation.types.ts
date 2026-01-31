export interface NavLink {
  id: string;
  label: string;
  href: string;
  sectionId: string;
}

export interface NavigationConfig {
  links: NavLink[];
  logo: {
    src: string;
    alt: string;
  };
}
