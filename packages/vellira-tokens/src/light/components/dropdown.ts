import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { status } from '../semantic/status.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const dropdown = {
  trigger: {
    default: {
      bg: 'transparent',
      fg: text.brand,
      border: 'transparent',
    },

    hover: {
      bg: colors.primary[50],
      fg: colors.primary[900],
      ring: 'transparent',
    },

    disabled: {
      bg: surface.subtle,
      fg: text.disabled,
      border: border.default,
    },
  },

  content: {
    bg: surface.elevated,
    fg: text.primary,
    border: border.default,
  },

  item: {
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
      ring: 'transparent',
    },

    disabled: {
      bg: 'transparent',
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
        bg: colors.error[50],
        fg: colors.error[700],
        ring: 'transparent',
      },
    },
  },

  groupLabel: {
    fg: text.muted,
  },

  separator: {
    bg: border.muted,
    fg: text.muted,
  },
} as const;
