'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingStore } from '../../store/loading-store';
import { LoadingScreen } from './loading-screen';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export const LoadingWrapper = ({ children }: LoadingWrapperProps) => {
  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ 
          visibility: isLoading ? 'hidden' : 'visible',
          height: isLoading ? '100vh' : 'auto',
          overflow: isLoading ? 'hidden' : 'visible'
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
