import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';

const options = [
  { label: 'Starter', value: 'starter' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise' },
];

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Renders a native radio group where one option can be selected. Use it for small sets of mutually exclusive choices. The stories cover horizontal layout, required state, error message, disabled group, and disabled option.',
      },
    },
  },
  args: {
    label: 'Plan',
    defaultValue: 'pro',
    options,
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required plan',
  },
};

export const WithError: Story = {
  args: {
    error: 'Select a plan to continue',
    defaultValue: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: 'Starter', value: 'starter' },
      { label: 'Pro', value: 'pro', disabled: true },
      { label: 'Enterprise', value: 'enterprise' },
    ],
  },
};
