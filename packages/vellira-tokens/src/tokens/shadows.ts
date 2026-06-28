import { colors } from '../primitives/colors.js';

export const shadows = {
  sm: {
    x: 0,
    y: 1,
    blur: 2,
    color: colors.mono[950],
    opacity: 0.05,
    elevation: 1,
  },

  md: {
    x: 0,
    y: 4,
    blur: 6,
    color: colors.mono[950],
    opacity: 0.1,
    elevation: 4,
  },

  lg: {
    x: 0,
    y: 10,
    blur: 15,
    color: colors.mono[950],
    opacity: 0.15,
    elevation: 8,
  },
} as const;
