import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { render } from '../../test-utils/render';

import { TooltipContent } from './Content/TooltipContent';
import { Tooltip } from './Tooltip';

afterEach(() => {
  document.body.innerHTML = '';
  vi.useRealTimers();
});

describe('Tooltip', () => {
  it('renders tooltip content with placement metadata', () => {
    const arrowRef = { current: null };
    const { container, unmount } = render(
      <TooltipContent
        id='tip'
        role='tooltip'
        content='Helpful text'
        placement='bottom'
        arrowRef={arrowRef}
      />
    );

    const tooltip = container.querySelector('[role="tooltip"]');

    expect(tooltip?.id).toBe('tip');
    expect(tooltip?.getAttribute('data-placement')).toBe('bottom');
    expect(tooltip?.textContent).toContain('Helpful text');

    unmount();
  });

  it('does not open when disabled', () => {
    const { container, unmount } = render(
      <Tooltip content='Disabled tooltip' disabled>
        <button type='button'>Trigger</button>
      </Tooltip>
    );

    const trigger = container.querySelector('button');

    act(() => {
      trigger?.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });

    expect(document.body.textContent).not.toContain('Disabled tooltip');

    unmount();
  });

  it('opens when enabled', () => {
    vi.useFakeTimers();

    const { container, unmount } = render(
      <Tooltip content='Helpful tooltip'>
        <button type='button'>Trigger</button>
      </Tooltip>
    );

    const trigger = container.firstElementChild;

    act(() => {
      trigger?.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      vi.advanceTimersByTime(300);
    });

    expect(document.body.textContent).toContain('Helpful tooltip');

    unmount();
    vi.useRealTimers();
  });
});
