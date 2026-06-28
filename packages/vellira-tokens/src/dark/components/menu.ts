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
      bg: surface.active,
      fg: text.primary,
    },

    active: {
      bg: surface.active,
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
        bg: status.error.bg,
        fg: status.error.fg,
      },

      active: {
        bg: status.error.border,
        fg: status.error.fg,
      },
    },
  },

  trigger: {
    default: {
      fg: text.brand,
    },

    hover: {
      bg: surface.hover,
      fg: colors.vellira[50],
      ring: 'transparent',
    },
  },

  groupLabel: {
    fg: text.muted,
  },
} as const;
