import { act } from 'react';

import { afterEach, describe, expect, it } from 'vitest';

import { render } from '../../test-utils/render';

import { TooltipContent } from './Content/TooltipContent';
import { Tooltip } from './Tooltip';

afterEach(() => {
  document.body.innerHTML = '';
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
});
