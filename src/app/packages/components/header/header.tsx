'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo-lunaris.png" alt="Lunaris Tech" width={280} height={100} />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="#empresa">Empresa</Link>
          <span>|</span>
          <Link href="#servicos">Serviços</Link>
          <span>|</span>
          <Link href="#blog">Blog</Link>
          <span>|</span>
          <Link href="#contato">Contato</Link>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="#empresa" onClick={() => setMenuOpen(false)}>Empresa</Link>
            <Link href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link href="#blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
