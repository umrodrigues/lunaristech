'use client';

import { motion } from 'framer-motion';
import { useLoadingStore } from '../../store/loading-store';
import './loading-screen.scss';

export const LoadingScreen = () => {
  const { isLoading } = useLoadingStore();

  if (!isLoading) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      
      <div className="loading-content">
        <motion.div
          className="logo-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="logo">
            <div className="planet"></div>
            <div className="orbit">
              <div className="satellite"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Lunaris Tech
        </motion.h1>
        
        <motion.div
          className="loading-bar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="loading-bar">
            <motion.div
              className="loading-progress"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Explorando o universo da tecnologia...
        </motion.p>
      </div>
    </motion.div>
  );
};
