'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src="/space.jpg"
        alt="Fundo espacial"
        fill
        priority
        className={styles.bgImage}
      />
      <div className={styles.overlay}>
        <h1>
          INOVAÇÃO EM TECNOLOGIA <br />
          PARA O FUTURO
        </h1>
        <p>Transformando ideias em soluções digitais</p>
        <button className={styles.button}>SAIBA MAIS</button>
      </div>
    </section>
  );
}
