'use client';

import Link from 'next/link';
import { cn } from '@/utils';
import styles from '../Navbar.module.scss';

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    onClick?.();
  };

  return (
    <Link
      href={href}
      className={cn(styles.navLink, isActive && styles.active)}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
}
