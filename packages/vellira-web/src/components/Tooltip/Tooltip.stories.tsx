import { Search } from '@romanbakurov/vellira-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../../primitives/Button';
import { Tooltip } from '../Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Tooltip Component

Short helper overlay attached to a trigger element.

**Features**
- Placement: top, bottom, left, and right
- Opens on hover or focus
- Disabled state
- Custom open and close delay
- Maximum width control
- Rich content support

### Usage

Use Tooltip for brief explanations. Keep content short and avoid putting required information only inside a tooltip.

Correct usage:

\`\`\`tsx
<Tooltip content='Search all projects' placement='top'>
  <Button ariaLabel='Search' leftIcon={<Search />} />
</Tooltip>
\`\`\`
`,
      },
    },
  },
  args: {
    onOpenChange: fn(),
  },
  argTypes: {
    children: {
      description: 'Trigger element that the tooltip is attached to.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    content: {
      description: 'Tooltip content.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    placement: {
      description: 'Tooltip position relative to the trigger.',
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        type: { summary: `'top' | 'bottom' | 'left' | 'right'` },
        defaultValue: { summary: 'top' },
      },
    },
    disabled: {
      description: 'Disables tooltip behavior.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    delay: {
      description: 'Open and close delay in milliseconds.',
      control: 'object',
      table: {
        type: { summary: '{ open?: number; close?: number }' },
      },
    },
    maxWidth: {
      description: 'Maximum tooltip width in pixels.',
      control: 'number',
      table: {
        type: { summary: 'number' },
      },
    },
    onOpenChange: {
      description: 'Called when tooltip open state changes.',
      action: 'open changed',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
  },
  render: (args) => {
    return (
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    );
  },
};

export const Placement: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        paddingTop: '50px',
      }}
    >
      <Tooltip content='Top tooltip' placement='top'>
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content='Bottom tooltip' placement='bottom'>
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip content='Left tooltip' placement='left'>
        <Button>Left</Button>
      </Tooltip>

      <Tooltip content='Right tooltip' placement='right'>
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content:
      'This is a very very very long tooltip content that will wrap to multiple lines automatically',
    placement: 'top',
  },
  render: (args) => {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
      >
        <Tooltip {...args}>
          <Button>Hover for long text</Button>
        </Tooltip>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button disabled>Disabled Button</Button>
    </Tooltip>
  ),
};

export const CustomDelay: Story = {
  args: {
    content: 'Appears after 500ms',
    delay: { open: 500, close: 200 },
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Slow Tooltip</Button>
    </Tooltip>
  ),
};

export const NoDelay: Story = {
  args: {
    content: 'Appears instantly',
    delay: { open: 0, close: 0 },
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Instant Tooltip</Button>
    </Tooltip>
  ),
};

export const RichContent: Story = {
  args: {
    content: (
      <div>
        <strong>Rich content</strong>
        <p style={{ margin: 0 }}>Can contain any React node</p>
        <code>Even code blocks</code>
      </div>
    ),
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Rich Tooltip</Button>
    </Tooltip>
  ),
};

export const DifferentTriggers: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Tooltip content='Small button'>
        <Button size='sm'>Small</Button>
      </Tooltip>

      <Tooltip content='Medium button'>
        <Button size='md'>Medium</Button>
      </Tooltip>

      <Tooltip content='Large button'>
        <Button size='lg'>Large</Button>
      </Tooltip>

      <Tooltip content='Icon only'>
        <Button ariaLabel='Search' leftIcon={<Search />} />
      </Tooltip>
    </div>
  ),
};
