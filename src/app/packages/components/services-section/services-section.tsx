'use client';

import styles from './ServicesSection.module.scss';
import { FaLaptopCode, FaMobileAlt, FaBrain, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NoSSR } from '../../ui/components/NoSSR';

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: 'Web Experience',
    description: 'Desenvolvimento de sites modernos, rápidos e responsivos com foco em performance.',
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Aplicativos Mobile',
    description: 'Apps para iOS e Android com interfaces fluidas e experiências encantadoras.',
  },
  {
    icon: <FaBrain size={28} />,
    title: 'Soluções Inteligentes',
    description: 'Aplicação de tecnologia e IA para automação e inovação de processos.',
  },
  {
    icon: <FaCloud size={28} />,
    title: 'Integrações & APIs',
    description: 'Conectamos sistemas e criamos soluções escaláveis com integrações eficientes.',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="servicos">
      <NoSSR>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </NoSSR>
    </section>
  );
}
