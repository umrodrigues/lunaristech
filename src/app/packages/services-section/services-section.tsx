'use client';

import styles from './ServicesSection.module.scss';
import { FaLaptopCode, FaMobileAlt, FaLightbulb, FaCog } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: 'Desenvolvimento de Sites',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Desenvolvimento de Aplicativos',
  },
  {
    icon: <FaLightbulb size={40} />,
    title: 'Consultoria em Tecnologia',
  },
  {
    icon: <FaCog size={40} />,
    title: 'Soluções Personalizadas',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h2>Serviços</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.icon}>{service.icon}</div>
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
