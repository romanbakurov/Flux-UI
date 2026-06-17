import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Button } from '../../primitives/Button';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Tooltip Component

Native helper overlay attached to a trigger.

**Features**
- Text content
- Custom React node content
- Disabled state
- Maximum width control
- Custom trigger composition

### Usage

Use Tooltip for short contextual explanations. Keep the content concise so it remains readable on small screens.

Correct usage:

\`\`\`tsx
<Tooltip content='Helpful native tooltip content'>
  <Button>Press and hold</Button>
</Tooltip>
\`\`\`
`,
      },
    },
  },
  args: {
    content: 'Helpful native tooltip content',
    children: <Button>Press and hold</Button>,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    content:
      'Use this tooltip for short contextual help. Keep content concise on small screens.',
    maxWidth: 280,
  },
};

export const CustomContent: Story = {
  args: {
    content: <Text>Custom tooltip node</Text>,
    children: <Button variant='secondary'>Show custom content</Button>,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Button variant='secondary'>Disabled tooltip</Button>,
  },
};
