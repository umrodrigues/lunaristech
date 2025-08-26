'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { motion } from 'framer-motion';
import { NoSSR } from '../../ui/components/NoSSR';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/backgrounds/space.jpg"
        alt="Fundo espacial"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlay}>
        <NoSSR>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Innovate. Develop. Transform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Transformando ideias em soluções digitais
          </motion.p>

          <motion.a
            href="https://api.whatsapp.com/send?phone=5551997791996"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SAIBA MAIS
          </motion.a>
        </NoSSR>
      </div>
    </section>
  );
}
