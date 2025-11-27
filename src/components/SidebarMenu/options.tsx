import {
  FaHome,
  FaUserCircle,
  FaFolderOpen,
  FaInfoCircle,
} from 'react-icons/fa';
import { SidebarMenuOptions } from './types';

export const sidebarMenuOptions1Level: SidebarMenuOptions[] = [
  {
    label: 'Dashboard',
    icon: <FaHome />,
    hasChildren: false,
    href: '#',
  },
  {
    label: 'Account',
    icon: <FaUserCircle />,
    hasChildren: false,
    href: '#',
  },
  {
    label: 'Projects',
    icon: <FaFolderOpen />,
    hasChildren: false,
    href: '#',
  },
  {
    label: 'Help',
    icon: <FaInfoCircle />,
    hasChildren: false,
    href: '#',
  },
];

export const sidebarMenuOptions2Level: SidebarMenuOptions[] = [
  {
    label: 'Dashboard',
    icon: <FaHome />,
    hasChildren: false,
    href: '#',
  },
  {
    label: 'Account',
    icon: <FaUserCircle />,
    hasChildren: true,
    children: [
      { name: 'Profile', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    label: 'Projects',
    icon: <FaFolderOpen />,
    hasChildren: true,
    children: [
      { name: 'Active', href: '#' },
      { name: 'Archived', href: '#' },
    ],
  },
  {
    label: 'Help',
    icon: <FaInfoCircle />,
    hasChildren: false,
    href: '#',
  },
];
