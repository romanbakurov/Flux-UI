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
        component: `
### RadioGroup Component

Native group of mutually exclusive options.

**Features**
- Default selected value
- Horizontal and vertical orientation
- Required state
- Disabled group state
- Disabled individual options
- Validation error message

### Usage

Use RadioGroup when a small set of options should remain visible and only one option can be selected.

Correct usage:

\`\`\`tsx
<RadioGroup
  label='Plan'
  defaultValue='pro'
  options={plans}
/>
\`\`\`
`,
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
