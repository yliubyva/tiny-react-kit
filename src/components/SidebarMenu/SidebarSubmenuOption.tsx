import Link from 'next/link';
import styles from './SidebarMenu.module.css';

interface SidebarSubmenuOptionProps {
  subOptions: { name: string; href: string };
}

export function SidebarSubmenuOption({
  subOptions,
}: SidebarSubmenuOptionProps) {
  const { name, href } = subOptions;

  return (
    <li className={styles.sidebarSubmenuItem}>
      <Link href={href} className={styles.link}>
        {name}
      </Link>
    </li>
  );
}
