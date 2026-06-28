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
      fg: text.brand,
      border: border.default,
    },

    hover: {
      bg: colors.primary[50],
      fg: colors.primary[900],
      border: colors.primary[700],
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
      border: border.default,
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
      bg: colors.gray[200],
      fg: text.primary,
    },

    active: {
      bg: colors.gray[200],
      fg: text.primary,
      ring: focus.ring,
    },

    selected: {
      bg: colors.primary[700],
      fg: text.inverse,
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
    },
  },
} as const;
