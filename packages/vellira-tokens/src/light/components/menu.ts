import { colors } from '../../primitives/colors.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const menu = {
  item: {
    default: {
      bg: 'transparent',
      fg: text.primary,
    },

    hover: {
      bg: colors.vellira[100],
      fg: text.primary,
    },

    active: {
      bg: colors.vellira[150],
      fg: text.primary,
    },

    focus: {
      ring: 'transparent',
    },

    disabled: {
      bg: surface.subtle,
      fg: text.disabled,
    },

    danger: {
      default: {
        fg: status.error.fg,
      },

      hover: {
        bg: colors.error[50],
        fg: colors.error[700],
      },

      active: {
        bg: colors.error[100],
        fg: colors.error[700],
      },
    },
  },

  trigger: {
    default: {
      fg: text.brand,
    },

    hover: {
      bg: colors.vellira[100],
      fg: colors.primary[900],
      ring: 'transparent',
    },
  },

  groupLabel: {
    fg: text.muted,
  },
} as const;
