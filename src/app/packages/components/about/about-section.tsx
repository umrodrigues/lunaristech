'use client';

import styles from './AboutSection.module.scss';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NoSSR } from '../../ui/components/NoSSR';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="empresa">
      <NoSSR>
        <motion.div
          className={styles.iconWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaUsers size={40} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Quem Somos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Somos a Lunaris Tech — um estúdio de tecnologia que combina estratégia digital, design e engenharia para criar produtos que fazem diferença. Atuamos em todo o ciclo, da ideação à sustentação, conectando negócios a experiências digitais de verdade.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Entregamos plataformas web, aplicativos, automações inteligentes e integrações sob medida, sempre guiados por dados e pela agilidade de um time que gosta de resolver problemas complexos. Com a Lunaris, cada projeto ganha brilho próprio.
        </motion.p>
        </NoSSR>
    </section>
  );
}
