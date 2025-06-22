'use client';

import styles from './Footer.module.scss';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.logo}>LunaristTech</h2>
        <p className={styles.tagline}>Transformando ideias em soluções digitais inovadoras.</p>
        <div className={styles.socials}>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com" target="_blank">
            <FaGithub size={24} />
          </Link>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} LunaristTech. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
