import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select.tsx';
import { useState } from 'react';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select...',
  },

  render: () => {
    const [value, setValue] = useState('');

    return (
      <Select
        label='Country'
        value={value}
        onChange={setValue}
        options={[
          { label: 'France', value: 'fr' },
          { label: 'Spain', value: 'es' },
          { label: 'Germany', value: 'de' },
        ]}
      />
    );
  },
};
