import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Dropdown } from './Dropdown';

const items = [
  { type: 'group' as const, label: 'Actions' },
  { label: 'Edit profile', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { type: 'separator' as const },
  { label: 'Delete account', value: 'delete', danger: true },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Dropdown Component

Native contextual action menu opened from a trigger.

**Features**
- Label trigger
- Custom trigger content
- Group labels
- Separators
- Disabled items
- Danger items
- Wrapped long labels

### Usage

Use Dropdown for mobile action menus such as account actions, project actions, or destructive secondary actions.

Correct usage:

\`\`\`tsx
<Dropdown
  label='Open menu'
  items={[
    { label: 'Edit profile', value: 'edit' },
    { label: 'Delete account', value: 'delete', danger: true },
  ]}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    label: 'Open menu',
    items,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export const CustomTrigger: Story = {
  args: {
    trigger: <Text>Account actions</Text>,
    items,
  },
};

export const WithDisabledItems: Story = {
  args: {
    label: 'Project menu',
    items: [
      { label: 'Rename', value: 'rename' },
      { label: 'Archive', value: 'archive', disabled: true },
      { label: 'Delete', value: 'delete', danger: true },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled menu',
    items,
  },
};

export const LongText: Story = {
  args: {
    label: 'Long labels',
    items: [
      {
        label: 'This option has a long label and wraps onto another line',
        value: 'long',
        textWrap: 'wrap',
      },
      { label: 'Short option', value: 'short' },
    ],
  },
};
