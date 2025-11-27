import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { FaAngleRight } from 'react-icons/fa';
import { useClickOutside } from '@/hooks/useClickOutside';
import { SidebarSubmenuOption } from './';
import clsx from 'clsx';
import styles from './SidebarMenu.module.css';

const easeInOutArray = [0.4, 0, 0.2, 1] as const;

const submenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: {
      duration: 0.3,
      ease: easeInOutArray,
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeInOutArray,
    },
  },
};

interface SidebarOptionMain {
  optionName: string;
  optionIcon: React.ReactNode;
}

type SidebarMenuOptionProps =
  | (SidebarOptionMain & {
      hasChildrens: true;
      subOptions: { name: string; href: string }[];
    })
  | (SidebarOptionMain & { hasChildrens: false | undefined; href: string });

export function SidebarMenuOption(props: SidebarMenuOptionProps) {
  const { optionName, optionIcon } = props;

  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

  const optionRef = useRef<HTMLLIElement | null>(null);
  useClickOutside(optionRef, () => setIsOpenSubmenu(false), isOpenSubmenu);

  if (!props.hasChildrens) {
    const { href } = props;

    return (
      <li className={styles.sidebarMenuItem}>
        <Link
          href={href}
          className={clsx(styles.link, styles.option, styles.iconLabelGroup)}
        >
          {optionIcon}
          <span>{optionName}</span>
        </Link>
      </li>
    );
  }

  const { subOptions } = props;

  return (
    <li className={styles.sidebarMenuItem} ref={optionRef}>
      <button
        className={clsx(styles.button, styles.option)}
        onClick={() => setIsOpenSubmenu((prev) => !prev)}
      >
        <div className={styles.iconLabelGroup}>
          {optionIcon}
          <span>{optionName}</span>
        </div>

        <motion.div
          animate={{ rotate: isOpenSubmenu ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaAngleRight className={clsx(styles.icon)} />
        </motion.div>
      </button>

      <AnimatePresence>
        {subOptions && subOptions.length > 0 && isOpenSubmenu && (
          <motion.ul
            className={styles.sidebarSubmenuList}
            key="submenu"
            variants={submenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {subOptions.map((child) => (
              <SidebarSubmenuOption subOptions={child} key={child.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
