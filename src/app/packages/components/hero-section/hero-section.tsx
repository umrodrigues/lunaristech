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
        <a
          href="https://api.whatsapp.com/send?phone=5551997791996"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          SAIBA MAIS
        </a>
      </div>
    </section>
  );
}
