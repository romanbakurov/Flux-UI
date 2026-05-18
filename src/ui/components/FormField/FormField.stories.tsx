import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField';
import { Input } from '@ui/components/Input';
import { Checkbox } from '@ui/components/Checkbox';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Email',
    children: <Input placeholder='Enter email' />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters',
    children: <Input type='password' placeholder='Enter password' />,
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    children: <Input placeholder='Enter username' />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    children: <Input placeholder='Enter email' disabled />,
  },
};

export const WithCheckbox: Story = {
  args: {
    children: <Checkbox label='Accept terms' />,
  },
};
