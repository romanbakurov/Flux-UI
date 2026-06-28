import { colors } from '../../primitives/colors.js';

export const border = {
  default: colors.gray[200],
  muted: colors.grayBlue[100],
  strong: colors.gray[300],

  focus: colors.primary[700],
} as const;
