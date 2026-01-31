'use client';

import { useState, useEffect } from 'react';
import { Container, Logo, Icon } from '@/components/global';
import { cn } from '@/utils';
import { ProgressBar } from './components/ProgressBar';
import styles from './Navbar.module.scss';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(styles.navbar, isScrolled && styles.scrolled)}>
      <Container className={styles.container}>
        <Logo size="md" className={styles.centerLogo} />
      </Container>

      <ProgressBar />
    </header>
  );
}
