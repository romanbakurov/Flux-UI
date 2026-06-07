import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '@components/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Tabs Component

A fully accessible tabs component for switching between content panels.

**Features:**
- Keyboard navigation (Arrow keys, Home, End)
- ARIA attributes for accessibility
- Support for different variants
- Active tab styling
- Responsive design
        `,
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
        <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
        <Tabs.Tab index={2}>Tab 3</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel index={0}>Content for Tab 1</Tabs.Panel>
      <Tabs.Panel index={1}>Content for Tab 2</Tabs.Panel>
      <Tabs.Panel index={2}>Content for Tab 3</Tabs.Panel>
    </Tabs>
  ),
};
