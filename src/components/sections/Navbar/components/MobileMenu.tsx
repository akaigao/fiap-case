'use client';

import { useEffect } from 'react';
import { Icon } from '@/components/global';
import { NavLink as NavLinkType } from '@/types';
import { NavLink } from './NavLink';
import styles from '../Navbar.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinkType[];
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
  activeSection,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuOverlay} onClick={onClose} />
      <div className={styles.mobileMenuContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <Icon name="close" size={24} />
        </button>
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.sectionId}
              onClick={onClose}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
