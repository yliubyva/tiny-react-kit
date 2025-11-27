import { motion } from 'motion/react';
import { Variants } from 'motion';
import { ToastsColor, ToastsType, ToastsVariant } from './toastTypes';
import { GoTrophy, GoIssueClosed, GoStop, GoX } from 'react-icons/go';
import styles from './Toast.module.css';
import clsx from 'clsx';

const closeButtonVariants: Variants = {
  rest: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
};

const containerVariants: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

interface ToastProps {
  title: string;
  description?: string;
  variant: ToastsVariant;
  color: ToastsColor;
  duration: 2000 | 5000 | 10000;
  onClose?: () => void;
}

export function Toast({
  title,
  description,
  variant,
  color,
  onClose,
}: ToastProps) {
  const renderIcon = () => {
    switch (color) {
      case 'danger':
        return <GoStop className={styles.icon} />;
      case 'success':
        return <GoIssueClosed className={styles.icon} />;

      default:
        return <GoTrophy className={styles.icon} />;
    }
  };

  const getColorVariantClass = (color: ToastsColor, variant: ToastsVariant) => {
    const key = `${color}${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

    return styles[key];
  };

  const containerClass = clsx(
    styles.toastsContainer,
    getColorVariantClass(color, variant),
  );

  return (
    <motion.div
      className={containerClass}
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
    >
      <div className={styles.iconWrap}>{renderIcon()}</div>
      <div className={styles.textGroup}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <motion.button
        className={styles.closeButton}
        onClick={onClose}
        variants={closeButtonVariants}
      >
        <GoX />
      </motion.button>
    </motion.div>
  );
}
