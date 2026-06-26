import { act } from 'react';

import { afterEach, describe, expect, it } from 'vitest';

import { render } from '../../test-utils/render';

import { Tabs } from '.';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Tabs', () => {
  it('switches active panel when tab is pressed', () => {
    const { container, unmount } = render(
      <Tabs>
        <Tabs.List>
          <Tabs.Tab index={0}>Overview</Tabs.Tab>
          <Tabs.Tab index={1}>Usage</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Overview panel</Tabs.Panel>
        <Tabs.Panel index={1}>Usage panel</Tabs.Panel>
      </Tabs>
    );

    expect(container.textContent).toContain('Overview panel');

    const tabs = container.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    act(() => tabs[1].click());

    expect(container.textContent).toContain('Usage panel');
    expect(container.textContent).not.toContain('Overview panel');

    unmount();
  });

  it('exposes tablist, tab names, selected state, and disabled state', () => {
    const { container, unmount } = render(
      <Tabs>
        <Tabs.List>
          <Tabs.Tab index={0}>Overview</Tabs.Tab>
          <Tabs.Tab index={1} disabled>
            Disabled
          </Tabs.Tab>
          <Tabs.Tab index={2}>Usage</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Overview panel</Tabs.Panel>
        <Tabs.Panel index={1}>Disabled panel</Tabs.Panel>
        <Tabs.Panel index={2}>Usage panel</Tabs.Panel>
      </Tabs>
    );

    const tablist = container.querySelector('[role="tablist"]');
    const tabs = container.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    expect(tablist).not.toBeNull();
    expect(tabs).toHaveLength(3);
    expect(tabs[0].textContent).toBe('Overview');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].getAttribute('aria-disabled')).toBeNull();
    expect(tabs[1].textContent).toBe('Disabled');
    expect(tabs[1].disabled).toBe(true);
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
    expect(tabs[1].getAttribute('aria-disabled')).toBe('true');
    expect(tabs[2].textContent).toBe('Usage');
    expect(tabs[2].getAttribute('aria-selected')).toBe('false');

    act(() => tabs[2].click());

    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    expect(container.textContent).toContain('Usage panel');
    expect(container.textContent).not.toContain('Overview panel');

    unmount();
  });
});
