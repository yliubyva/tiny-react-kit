import { useRef } from 'react';
import { Variants } from 'motion';
import { motion, AnimatePresence } from 'motion/react';
import { SidebarMenuOption } from './';
import { SidebarMenuOptions } from './types';
import { useClickOutside } from '@/hooks/useClickOutside';
import styles from './SidebarMenu.module.css';

const easeInOutArray = [0.4, 0, 0.2, 1] as const;

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const sidebarVariants: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easeInOutArray,
    },
  },
};

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  options: SidebarMenuOptions[];
}

export function SidebarMenu({ isOpen, onClose, options }: SidebarMenuProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(sidebarRef, onClose, isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.sidebarMenuBackdrop}
          onClick={onClose}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className={styles.sidebarMenuContainer}
            ref={sidebarRef}
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
          >
            <span className={styles.logo}>LOGO</span>

            <div className={styles.divider}></div>

            <ul className={styles.sidebarMenuList}>
              {options.map((option) => {
                if (option.hasChildren) {
                  return (
                    <SidebarMenuOption
                      key={option.label}
                      optionName={option.label}
                      optionIcon={option.icon}
                      hasChildrens={true}
                      subOptions={option.children}
                    />
                  );
                }

                return (
                  <SidebarMenuOption
                    key={option.label}
                    optionName={option.label}
                    optionIcon={option.icon}
                    hasChildrens={false}
                    href={option.href}
                  />
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
