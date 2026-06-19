import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Select } from '../Select';

import type { SelectProps } from './types';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Select Component

Single-value select control for choosing from a predefined list.

**Features**
- Label and placeholder support
- Controlled selected value
- Disabled state
- Disabled options
- Validation error message
- Keyboard close with Escape

### Accessibility

The trigger exposes combobox semantics and updates its expanded state when the list opens or closes.

Correct usage:

\`\`\`tsx
<Select
  label='Country'
  value={country}
  onChange={setCountry}
  placeholder='Select country...'
  options={countries}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    id: {
      description:
        'Unique select id used to connect the label with the select.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      description: 'Text label displayed above the Select.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      description: 'Select name shared by all select options.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      description: 'Placeholder text shown when no value is selected.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'Current selected value for controlled usage.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      description: 'Initial selected value for uncontrolled usage.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      description: 'List of select options.',
      control: 'object',
      table: {
        type: {
          summary:
            'Array<{ label: string; value: string; disabled?: boolean }>',
        },
      },
    },
    required: {
      description: 'Marks the select as required.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the select trigger and prevents interaction.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      description: 'Validation error message displayed below the select.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Called when the selected value changes.',
      action: 'changed',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
  { label: 'Germany', value: 'de' },
];

const optionsWithDisabled = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es', disabled: true },
  { label: 'Germany', value: 'de' },
];

const SelectWithState = (args: SelectProps) => {
  const [value, setValue] = useState(args.value ?? args.defaultValue ?? '');

  return (
    <Select
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue);
      }}
    />
  );
};

export const Basic: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
};

export const CloseOnEscape: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
};

export const WithValue: Story = {
  args: {
    label: 'Country',
    value: 'fr',
    placeholder: 'Select country...',
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
    error: 'This field is required',
  },
  render: (args) => <SelectWithState {...args} />,
};

export const OptionWithDisabled: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: optionsWithDisabled,
  },
  render: (args) => <SelectWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    value: 'fr',
    placeholder: 'Select country...',
    options: defaultOptions,
    disabled: true,
  },
  render: (args) => <SelectWithState {...args} />,
};

export const Selection: Story = {
  args: {
    label: 'Country',
    value: '',
    placeholder: 'Select country...',
    options: defaultOptions,
  },
  render: (args) => <SelectWithState {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');

    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'true');
  },
};
