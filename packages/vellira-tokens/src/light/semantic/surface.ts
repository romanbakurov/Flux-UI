import { colors } from '../../primitives/colors.js';

export const surface = {
  default: colors.mono[50],
  muted: colors.grayBlue[50],
  subtle: colors.gray[100],
  elevated: colors.mono[50],

  inverse: colors.gray[900],
} as const;
