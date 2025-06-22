'use client';

import styles from './AboutSection.module.scss';
import { FaUsers } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.iconWrapper}>
        <FaUsers size={50} />
      </div>
      <h2>Sobre Nós</h2>
      <p>
        Na LunaristTech, nossa missão é impulsionar a inovação tecnológica.
        Comprometemo-nos com a excelência e qualidade em cada projeto.
      </p>
    </section>
  );
}
