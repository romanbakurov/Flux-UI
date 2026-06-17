import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Checkbox } from './index';

const meta = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Renders a checkbox with an optional label. Use it when the user can turn a single option on or off. The stories cover checked, unchecked, and disabled states.',
      },
    },
  },
  args: {
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Accept the terms',
    checked: true,
  },
};

export const BasicUnchecked: Story = {
  args: {
    label: 'Accept the terms',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Not available',
    disabled: true,
    checked: false,
  },
};
