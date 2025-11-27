import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  Toast,
  ToastProvider,
  ToastContainer,
  useToast,
} from '@/components/Toast';
import { ToastsType } from '@/components/Toast/toastTypes';

const meta = {
  title: 'Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastContainer />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastButton = ({
  title,
  description,
  variant,
  duration,
  color,
}: Omit<ToastsType, 'id'>) => {
  const { addToast } = useToast();

  return (
    <button
      onClick={() => addToast({ title, description, variant, color, duration })}
    >
      Display {color}-{variant} Toast
    </button>
  );
};

export const DefaultToast: Story = {
  args: {
    title: 'Default title',
    description: 'Display default toast',
    variant: 'solid',
    color: 'default',
    duration: 2000,
  },
  render: (args) => <ToastButton {...args} />,
};

export const DangerToast: Story = {
  args: {
    title: 'Danger title',
    description: 'Display danger toast',
    variant: 'solid',
    color: 'danger',
    duration: 5000,
  },
  render: (args) => <ToastButton {...args} />,
};

export const SuccessToast: Story = {
  args: {
    title: 'Success title',
    description: 'Display success toast',
    variant: 'solid',
    color: 'success',
    duration: 10000,
  },
  render: (args) => <ToastButton {...args} />,
};
