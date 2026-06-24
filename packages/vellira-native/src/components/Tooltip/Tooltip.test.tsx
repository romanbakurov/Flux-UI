import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../../primitives/Button';
import { render } from '../../test-utils/render';

import { Tooltip } from './Tooltip';

afterEach(() => {
  document.body.innerHTML = '';
  vi.useRealTimers();
});

describe('Native Tooltip', () => {
  it('shows content on long press and hides automatically', () => {
    vi.useFakeTimers();

    const { container, unmount } = render(
      <Tooltip content='Helpful text'>
        <Button>Show help</Button>
      </Tooltip>
    );

    expect(document.body.textContent).not.toContain('Helpful text');

    const trigger = container.querySelector<HTMLButtonElement>('button');

    act(() => {
      trigger?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
    });

    expect(document.body.textContent).toContain('Helpful text');

    act(() => {
      vi.advanceTimersByTime(2500);
    });

    expect(document.body.textContent).not.toContain('Helpful text');

    unmount();
  });
});
