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
      fg: text.muted,
      border: 'transparent',
    },

    hover: {
      bg: colors.warning[500],
      fg: colors.mono[950],
      border: colors.warning[500],
    },

    active: {
      bg: colors.info[400],
      fg: text.primary,
      border: colors.info[400],
    },

    disabled: {
      bg: 'transparent',
      fg: text.disabled,
      border: 'transparent',
    },
  },

  indicator: {
    bg: colors.info[400],
  },

  panel: {
    fg: text.primary,
  },
} as const;
