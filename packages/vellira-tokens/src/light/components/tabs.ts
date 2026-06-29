import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const tabs = {
  list: {
    border: border.default,
  },

  trigger: {
    default: {
      bg: 'transparent',
      fg: text.muted,
      border: 'transparent',
    },

    hover: {
      bg: surface.hover,
      fg: colors.primary[500],
      border: 'transparent',
    },

    active: {
      bg: colors.primary[700],
      fg: text.brand,
      border: colors.primary[700],
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
      bg: surface.hover,
      fg: text.primary,
      border: 'transparent',
    },

    active: {
      bg: colors.primary[500],
      fg: text.inverse,
      border: colors.primary[500],
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  indicator: {
    default: {
      bg: text.brand,
    },

    hover: {
      bg: colors.primary[500],
    },

    active: {
      bg: text.brand,
    },
  },

  panel: {
    fg: text.primary,
  },
} as const;
