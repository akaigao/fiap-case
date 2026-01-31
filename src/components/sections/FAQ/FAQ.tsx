'use client';

import { Container } from '@/components/global';
import { useIntersectionObserver } from '@/hooks';
import { faqItems } from '@/data/faq';
import { cn } from '@/utils';
import { FAQItem } from './components';
import styles from './FAQ.module.scss';

export function FAQ() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="faq" className={styles.faq}>
      <Container>
        <div ref={ref} className={cn(styles.header, isVisible && styles.visible)}>
          <h2 className={styles.title}>FAQ</h2>
          <span className={styles.subtitle}>Dúvidas Frequentes</span>
        </div>
        <div className={cn(styles.grid, isVisible && styles.visible)}>
          {faqItems.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
