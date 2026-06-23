import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../../primitives/Button';
import { render } from '../../test-utils/render';

import { Modal } from '.';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Modal', () => {
  it('renders modal content when open', () => {
    const { container, unmount } = render(
      <Modal isOpen onClose={() => undefined}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
      </Modal>
    );

    expect(container.textContent).toContain('Native modal');
    expect(container.textContent).toContain('Body content');

    unmount();
  });

  it('calls onClose when backdrop is pressed', () => {
    const onClose = vi.fn();
    const { container, unmount } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Header>Native modal</Modal.Header>
        <Modal.Body>Body content</Modal.Body>
        <Modal.Footer>
          <Button>Done</Button>
        </Modal.Footer>
      </Modal>
    );

    const backdrop = container.querySelector<HTMLButtonElement>(
      '[data-testid="modal-backdrop"]'
    );

    act(() => backdrop?.click());

    expect(onClose).toHaveBeenCalledOnce();

    unmount();
  });
});
