import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Input } from '../../primitives/Input';

import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Patterns/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Provides native form field layout around custom content. Use it to keep labels, required markers, errors, disabled state, and child controls visually consistent.',
      },
    },
  },
  args: {
    label: 'Label',
    children: <Text>Field content</Text>,
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithInput: Story = {
  render: () => (
    <FormField label='Email' required error='Enter a valid email'>
      <Input label='' placeholder='name@company.com' />
    </FormField>
  ),
};
