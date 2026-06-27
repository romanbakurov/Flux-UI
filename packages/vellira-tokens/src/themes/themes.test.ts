import { describe, expect, it } from 'vitest';

import { darkTheme, highContrastTheme, lightTheme } from './index';

describe('theme presets', () => {
  it('exports all theme presets', () => {
    expect(lightTheme).toBeDefined();
    expect(darkTheme).toBeDefined();
    expect(highContrastTheme).toBeDefined();
  });

  it('keeps the same top-level structure', () => {
    expect(Object.keys(darkTheme)).toEqual(Object.keys(lightTheme));
    expect(Object.keys(highContrastTheme)).toEqual(Object.keys(lightTheme));
  });

  it('keeps the same semantic color groups', () => {
    expect(Object.keys(darkTheme.colors)).toEqual(
      Object.keys(lightTheme.colors)
    );

    expect(Object.keys(highContrastTheme.colors)).toEqual(
      Object.keys(lightTheme.colors)
    );
  });

  it('uses different semantic values for dark theme', () => {
    expect(darkTheme.colors.surface.default).not.toBe(
      lightTheme.colors.surface.default
    );

    expect(darkTheme.colors.text.primary).not.toBe(
      lightTheme.colors.text.primary
    );
  });

  it('uses different semantic values for high contrast theme', () => {
    expect(highContrastTheme.colors.focus.ring).not.toBe(
      lightTheme.colors.focus.ring
    );
  });

  it('provides theme-specific CSS variable values', () => {
    expect(lightTheme.colors.surface.default).toBe('#ffffff');
    expect(darkTheme.colors.surface.default).toBe('#17151F');
    expect(highContrastTheme.colors.surface.default).toBe('#000000');
    expect(highContrastTheme.colors.surface.elevated).toBe('#0F0F0F');
    expect(highContrastTheme.colors.text.primary).toBe('#FFFFFF');
    expect(highContrastTheme.colors.text.muted).toBe('#E5E5E5');
    expect(highContrastTheme.colors.border.default).toBe('#FFFFFF');
    expect(highContrastTheme.colors.interactive.primary).toBe('#4DA3FF');
    expect(highContrastTheme.colors.action.primaryFg).toBe('#000000');
    expect(highContrastTheme.colors.action.dangerHoverBg).toBe('#0F0F0F');
    expect(highContrastTheme.colors.action.dangerHoverFg).toBe('#FFFFFF');
    expect(highContrastTheme.colors.control.selectedFg).toBe('#000000');
    expect(highContrastTheme.colors.menu.itemHoverFg).toBe('#FFFFFF');
    expect(highContrastTheme.colors.menu.itemFocusRing).toBe('#4DA3FF');
    expect(highContrastTheme.colors.focus.ring).toBe('#FFFF00');
  });
});
