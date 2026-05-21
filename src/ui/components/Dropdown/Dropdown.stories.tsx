import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';
import Restart from '@/assets/icons/Restart.svg?react';
import Edit from '@/assets/icons/Edit.svg?react';
import Delete from '@/assets/icons/Delete.svg?react';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'Edit', value: 'edit', icon: <Edit /> },
  { label: 'Refresh', value: 'refresh', icon: <Restart /> },
  { label: 'Delete', value: 'delete', icon: <Delete />, danger: true },
];

export const Basic: Story = {
  args: {
    label: 'Name',
    items: defaultOptions,
  },
};
