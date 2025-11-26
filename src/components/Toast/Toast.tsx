import { ToastsColor, ToastsVariant } from './toastTypes';
import { GoTrophy, GoIssueClosed, GoStop, GoX } from 'react-icons/go';
import styles from './Toast.module.css';
import clsx from 'clsx';

interface ToastProps {
  title: string;
  description?: string;
  variant: ToastsVariant;
  color: ToastsColor;
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
    <div className={containerClass}>
      <div className={styles.iconWrap}>{renderIcon()}</div>
      <div className={styles.textGroup}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        <GoX />
      </button>
    </div>
  );
}
