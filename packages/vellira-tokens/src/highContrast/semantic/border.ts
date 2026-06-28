import { colors } from '../../primitives/colors.js';

export const border = {
  default: colors.mono[50],
  muted: colors.gray[400],
  strong: colors.mono[100],

  focus: colors.warning[500],
} as const;
