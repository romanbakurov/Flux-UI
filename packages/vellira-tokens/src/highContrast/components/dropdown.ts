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
      bg: colors.gray[900],
      fg: text.primary,
      ring: colors.warning[500],
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
      bg: colors.gray[800],
      fg: text.primary,
    },

    active: {
      bg: colors.gray[800],
      fg: text.primary,
      ring: colors.warning[500],
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
        bg: colors.error[300],
        fg: text.inverse,
      },

      active: {
        bg: colors.error[300],
        fg: text.inverse,
        ring: colors.warning[500],
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
