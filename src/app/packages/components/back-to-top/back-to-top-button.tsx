'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import clsx from 'clsx';
import styles from './BackToTopButton.module.scss';

export const BackToTopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        if (scrollY > 350) {
          setShowTopButton(true);
        } else {
          setShowTopButton(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(styles.button, showTopButton ? styles.fadeIn : styles.fadeOut)}
      aria-label="Back to top"
    >
      <AiOutlineArrowUp />
    </button>
  );
};
