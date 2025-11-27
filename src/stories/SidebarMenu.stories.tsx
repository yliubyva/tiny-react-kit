import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useArgs } from 'storybook/preview-api';

import { SidebarMenu } from '@/components/SidebarMenu';
import {
  sidebarMenuOptions1Level,
  sidebarMenuOptions2Level,
} from '@/components/SidebarMenu/options';

const meta = {
  title: 'SidebarMenu',
  component: SidebarMenu,
  argTypes: {
    onClose: { action: 'onClose' },
  },
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarMenu1Level: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    options: sidebarMenuOptions1Level,
  },
  render: (args) => {
    const [, updateArgs] = useArgs();

    const closeMenu = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const openMenu = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button onClick={openMenu}>Open sidebarMenu without submenus</button>

        <SidebarMenu
          isOpen={args.isOpen}
          onClose={closeMenu}
          options={args.options}
        />
      </>
    );
  },
};

export const SidebarMenu2Level: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    options: sidebarMenuOptions2Level,
  },
  render: (args) => {
    const [, updateArgs] = useArgs();

    const closeMenu = () => {
      updateArgs({ isOpen: false });
      args.onClose();
    };

    const openMenu = () => {
      updateArgs({ isOpen: true });
    };

    return (
      <>
        <button onClick={openMenu}>Open sidebarMenu with submenus</button>

        <SidebarMenu
          isOpen={args.isOpen}
          onClose={closeMenu}
          options={args.options}
        />
      </>
    );
  },
};
