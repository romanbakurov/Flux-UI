import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const options = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Germany', value: 'de' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Select Component

Native select-like field for choosing one value from a list.

**Features**
- Label and placeholder support
- Default selected value
- Required state
- Disabled state
- Disabled options
- Validation error message

### Usage

Use Select for compact option picking on mobile when the available options are known in advance.

Correct usage:

\`\`\`tsx
<Select
  label='Country'
  placeholder='Select country...'
  options={countries}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    label: 'Country',
    placeholder: 'Select country...',
    options,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'fr',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Country is required',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'de',
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: 'France', value: 'fr' },
      { label: 'Spain', value: 'es', disabled: true },
      { label: 'Germany', value: 'de' },
    ],
  },
};
