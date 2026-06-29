import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { focus } from '../semantic/focus.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const select = {
  trigger: {
    default: {
      bg: surface.default,
      fg: text.primary,
      border: border.default,
    },

    hover: {
      bg: 'transparent',
      fg: colors.mono[50],
      border: colors.warning[500],
    },

    focus: {
      bg: surface.default,
      fg: text.primary,
      border: border.focus,
      ring: focus.ring,
    },

    disabled: {
      bg: surface.subtle,
      fg: text.disabled,
      border: border.disabled,
    },

    placeholder: {
      fg: text.muted,
    },

    error: {
      border: status.error.fg,
      ring: status.error.bg,
    },
  },

  dropdown: {
    bg: surface.elevated,
    fg: text.primary,
    border: border.focus,
  },

  option: {
    default: {
      bg: 'transparent',
      fg: text.primary,
    },

    hover: {
      bg: colors.warning[500],
      fg: colors.mono[950],
    },

    active: {
      bg: colors.warning[500],
      fg: colors.mono[950],
      ring: 'transparent',
    },

    selected: {
      bg: colors.primary[500],
      fg: colors.mono[50],
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
    },
  },
} as const;
