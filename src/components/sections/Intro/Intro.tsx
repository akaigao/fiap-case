'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { InfiniteMarquee } from './_components/InfiniteMarquee/InfiniteMarquee';
import { HeroImage } from './_components/HeroImage/HeroImage';
import { ScrollText } from './_components/ScrollText/ScrollText';
import styles from './Intro.module.scss';

export function Intro() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="intro" ref={containerRef} className={styles.intro}>
      <div className={styles.marqueeSection}>
        <InfiniteMarquee
          text="CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO."
          direction="left"
        />
        <InfiniteMarquee
          text="TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO."
          direction="right"
        />
      </div>

      <div className={styles.heroSection}>
        <HeroImage src="/imgs/intro.png" alt="FIAP - Educação em tecnologia" />
      </div>

      <div className={styles.scrollTextSection}>
        <ScrollText
          scrollProgress={scrollYProgress}
          row1Text="Skills • Conhecimento • Skills"
          row2Text="MUITO ALÉM DOS TUTORIAIS • MUITO ALÉM DOS TUTORIAIS • MUITO ALÉM DOS TUTORIAIS"
        />
      </div>
    </section>
  );
}
