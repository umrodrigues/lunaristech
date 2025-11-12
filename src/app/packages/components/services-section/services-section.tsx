'use client';

import styles from './ServicesSection.module.scss';
import { FaLaptopCode, FaMobileAlt, FaBrain, FaCloud, FaCogs, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NoSSR } from '../../ui/components/NoSSR';

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: 'Web Experience',
    description: 'Experiências digitais rápidas, acessíveis e alinhadas à identidade da sua marca.',
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos com jornadas fluidas e recursos pensados para retenção.',
  },
  {
    icon: <FaBrain size={28} />,
    title: 'Soluções Inteligentes',
    description: 'Serviços guiados por dados e IA para personalizar experiências e gerar novos insights.',
  },
  {
    icon: <FaCogs size={28} />,
    title: 'Automação Digital',
    description: 'Fluxos automatizados, integrações low-code e bots que reduzem tarefas repetitivas.',
  },
  {
    icon: <FaCloud size={28} />,
    title: 'Integrações & APIs',
    description: 'Infraestrutura conectada com APIs escaláveis, monitoração contínua e observabilidade.',
  },
  {
    icon: <FaRocket size={28} />,
    title: 'Evolução Contínua',
    description: 'Operação assistida, otimizações recorrentes e squads para acelerar novos ciclos de entrega.',
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
