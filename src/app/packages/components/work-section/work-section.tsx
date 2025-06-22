'use client';

import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { SiPostgresql, SiNextdotjs } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkSection.module.scss';
import { workMock } from './__mocks__/workMock';

import type { IconType } from 'react-icons';

type IconName = keyof typeof iconMap;

const iconMap: Record<string, IconType> = {
  FaReact,
  FaNodeJs,
  FaLaravel,
  SiPostgresql,
  SiNextdotjs,
};

export default function WorkSection() {
  return (
    <section className={styles.workSection}>
      <h2>Conheça os nossos projetos</h2>
      <div className={styles.cardsContainer}>
        {workMock.map(({ id, title, description, image, techIcons, link }) => (
          <div className={styles.card} key={id}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
            <div className={styles.details}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className={styles.techIcons}>
                {techIcons.map((iconName) => {
                  const IconComponent = iconMap[iconName];
                  return IconComponent ? <IconComponent key={iconName} size={26} /> : null;
                })}
              </div>
              <Link href={link} target="_blank" className={styles.link}>
                Ver site
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
