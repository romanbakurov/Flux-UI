import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Button } from '../../primitives/Button';

import { Modal } from './Modal';

type ModalDemoProps = {
  defaultOpen?: boolean;
  closeOnBackdrop?: boolean;
  title?: string;
};

function ModalDemo({
  defaultOpen = false,
  closeOnBackdrop = true,
  title = 'Delete file',
}: ModalDemoProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnBackdrop={closeOnBackdrop}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <Text>Are you sure you want to continue?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onPress={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant='danger' onPress={() => setIsOpen(false)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Modal Component

Native dialog displayed above the current screen.

**Features**
- Header, body, and footer composition
- Optional root title prop
- Default open state for previews
- Backdrop close behavior can be disabled
- Works with text content and action buttons

### Usage

Use Modal for confirmations and focused flows that should interrupt the current screen until the user responds.

Correct usage:

\`\`\`tsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Header>Delete file</Modal.Header>

  <Modal.Body>
    <Text>Are you sure you want to continue?</Text>
  </Modal.Body>

  <Modal.Footer>
    <Button variant='secondary' onPress={handleClose}>Cancel</Button>
    <Button variant='danger' onPress={handleDelete}>Delete</Button>
  </Modal.Footer>
</Modal>
\`\`\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Open: Story = {
  render: () => <ModalDemo defaultOpen />,
};

export const WithTitleProp: Story = {
  render: () => (
    <Modal isOpen onClose={() => undefined} title='Native modal'>
      <Modal.Body>
        <Text>Modal can render a title through the root title prop.</Text>
      </Modal.Body>
    </Modal>
  ),
};

export const WithoutBackdropClose: Story = {
  render: () => <ModalDemo closeOnBackdrop={false} title='Important notice' />,
};
