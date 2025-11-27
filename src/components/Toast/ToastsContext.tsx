'use client';

import { createContext, useContext, useState } from 'react';
import { ToastsType } from './toastTypes';

interface ToastContextType {
  toasts: ToastsType[];
  addToast: (toast: Omit<ToastsType, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const ToastsContext = createContext<ToastContextType | undefined>(
  undefined,
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastsType[]>([]);

  const addToast = (toast: Omit<ToastsType, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 11);
    const duration = toast.duration;
    
    setToasts((prev) => [...prev, { ...toast, id }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastsContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastsContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
};
