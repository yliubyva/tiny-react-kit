'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Toast } from './Toast';
import { useToast } from './ToastsContext';
import styles from './Toast.module.css';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className={styles.mainContainer}>
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <motion.div
            key={`toast-${toast.id}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
          >
            <Toast {...toast} onClose={() => removeToast(toast.id)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
