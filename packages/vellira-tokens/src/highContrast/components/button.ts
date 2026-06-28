import { colors } from '../../primitives/colors.js';
import { border } from '../semantic/border.js';
import { surface } from '../semantic/surface.js';
import { text } from '../semantic/text.js';

export const button = {
  primary: {
    default: {
      bg: colors.info[400],
      fg: text.inverse,
      border: colors.info[400],
    },

    hover: {
      bg: colors.info[500],
      fg: text.inverse,
      border: colors.info[500],
    },

    pressed: {
      bg: colors.info[600],
      fg: text.inverse,
      border: colors.info[600],
    },
  },

  secondary: {
    default: {
      bg: colors.mono[50],
      fg: text.inverse,
      border: colors.mono[50],
    },

    hover: {
      bg: colors.gray[200],
      fg: text.inverse,
      border: colors.gray[200],
    },

    pressed: {
      bg: colors.gray[400],
      fg: text.inverse,
      border: colors.gray[400],
    },
  },

  danger: {
    default: {
      bg: colors.error[300],
      fg: text.inverse,
      border: colors.error[300],
    },

    hover: {
      bg: colors.error[200],
      fg: text.inverse,
      border: colors.error[200],
    },

    pressed: {
      bg: colors.error[800],
      fg: text.inverse,
      border: colors.error[800],
    },
  },

  disabled: {
    bg: surface.subtle,
    fg: text.disabled,
    border: border.default,
  },
} as const;
