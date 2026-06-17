import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Input Component

Native text input for short form values.

**Features**
- Label and placeholder support
- Value display
- Required state
- Disabled state
- Validation error message
- Input type variants
- Size variants

### Usage

Use Input for names, emails, passwords, phone numbers, and other single-line native form values.

Correct usage:

\`\`\`tsx
<Input
  label='Email'
  placeholder='name@company.com'
  value={email}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    label: 'Email',
    placeholder: 'name@company.com',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'hello@virelia.dev',
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Full name',
    placeholder: 'Roman Bakurov',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: 'Password is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    value: 'Not editable',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large input',
  },
};
