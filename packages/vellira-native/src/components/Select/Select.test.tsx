import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { render } from '../../test-utils/render';

import { Select } from './Select';

const options = [
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de', disabled: true },
  { label: 'Spain', value: 'es' },
];

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Select', () => {
  it('opens options and selects a value after confirmation', () => {
    const onChange = vi.fn();

    const { container, unmount } = render(
      <Select label='Country' options={options} onChange={onChange} />
    );

    const trigger =
      container.querySelector<HTMLButtonElement>('[role="button"]');

    act(() => {
      trigger?.click();
    });

    expect(trigger?.getAttribute('aria-expanded')).toBe('true');

    const option = Array.from(document.body.querySelectorAll('button')).find(
      (button) => button.textContent === 'France'
    );

    expect(option).toBeTruthy();

    act(() => {
      option?.click();
    });

    expect(onChange).not.toHaveBeenCalled();

    const doneButton = Array.from(
      document.body.querySelectorAll('button')
    ).find((button) => button.textContent === 'Done');

    expect(doneButton).toBeTruthy();

    act(() => {
      doneButton?.click();
    });

    expect(onChange).toHaveBeenCalledWith('fr');
    expect(container.textContent).toContain('France');
    expect(trigger?.getAttribute('aria-expanded')).toBe('false');

    unmount();
  });

  it('ignores disabled options and closes without change on cancel', () => {
    const onChange = vi.fn();

    const { container, unmount } = render(
      <Select
        label='Country'
        options={options}
        defaultValue='es'
        onChange={onChange}
      />
    );

    const trigger =
      container.querySelector<HTMLButtonElement>('[role="button"]');

    act(() => {
      trigger?.click();
    });

    const disabledOption = Array.from(
      document.body.querySelectorAll('button')
    ).find((button) => button.textContent === 'Germany - unavailable');
    const cancelButton = Array.from(
      document.body.querySelectorAll('button')
    ).find((button) => button.textContent === 'Cancel');

    expect(disabledOption?.disabled).toBe(true);

    act(() => {
      disabledOption?.click();
      cancelButton?.click();
    });

    expect(onChange).not.toHaveBeenCalled();
    expect(container.textContent).toContain('Spain');
    expect(trigger?.getAttribute('aria-expanded')).toBe('false');

    unmount();
  });

  it('does not open when disabled', () => {
    const { container, unmount } = render(
      <Select label='Country' options={options} disabled error='Required' />
    );

    const trigger =
      container.querySelector<HTMLButtonElement>('[role="button"]');

    act(() => {
      trigger?.click();
    });

    expect(trigger?.getAttribute('aria-expanded')).toBe('false');
    expect(document.body.textContent).not.toContain('Cancel');
    expect(container.textContent).toContain('Required');

    unmount();
  });
});
