import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  linkTo?: string;
}

export function Logo({ className, size = 'md', linkTo = '/' }: LogoProps) {
  const logoImage = (
    <Image
      src="/svgs/logo-fiap.svg"
      alt="FIAP"
      width={size === 'sm' ? 80 : size === 'md' ? 100 : 120}
      height={size === 'sm' ? 24 : size === 'md' ? 30 : 36}
      priority
      className={styles.image}
    />
  );

  if (linkTo) {
    return (
      <Link href={linkTo} className={cn(styles.logo, styles[size], className)}>
        {logoImage}
      </Link>
    );
  }

  return (
    <div className={cn(styles.logo, styles[size], className)}>{logoImage}</div>
  );
}
