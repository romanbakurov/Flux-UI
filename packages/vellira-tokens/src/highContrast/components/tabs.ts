import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { text } from '../semantic/text.js';

export const tabs = {
  list: {
    border: border.default,
  },

  trigger: {
    default: {
      bg: 'transparent',
      fg: text.primary,
      border: 'transparent',
    },

    hover: {
      bg: 'transparent',
      fg: colors.warning[500],
      border: colors.warning[500],
    },

    active: {
      bg: 'transparent',
      fg: text.brand,
      border: colors.primary[500],
    },

    focus: {
      ring: colors.warning[500], // для contrast
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  pills: {
    default: {
      bg: 'transparent',
      fg: text.primary,
      border: 'transparent',
    },

    hover: {
      bg: colors.warning[500],
      fg: text.inverse,
      border: 'transparent',
    },

    active: {
      bg: colors.primary[600],
      fg: colors.mono[50],
      border: colors.primary[600],
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  indicator: {
    default: {
      bg: colors.warning[500],
    },

    hover: {
      bg: colors.warning[500],
    },

    active: {
      bg: colors.primary[300],
    },
  },

  panel: {
    fg: text.primary,
  },
} as const;
