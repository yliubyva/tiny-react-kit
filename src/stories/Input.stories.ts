import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from '@/components/Input';

const meta = {
  title: 'Smart Input',
  component: Input,
  parameters: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    labelText: 'Text input',
    name: 'text',
    type: 'text',
    placeholder: 'Enter text',
    isClearable: false,
  },
};

export const PasswordInput: Story = {
  args: {
    labelText: 'Password input',
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
    isClearable: false,
  },
};

export const NumberInput: Story = {
  args: {
    labelText: 'Number input',
    name: 'number',
    type: 'number',
    placeholder: 'Enter number',
    isClearable: false,
  },
};
