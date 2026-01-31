import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
  size?: 'default' | 'narrow' | 'wide';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = 'div', size = 'default', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(styles.container, styles[size], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
