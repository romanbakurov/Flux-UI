import { colors } from '../../primitives/colors.js';

export const text = {
  primary: colors.mono[50],
  secondary: colors.mono[50],
  muted: colors.gray[200],
  disabled: colors.gray[500],

  inverse: colors.mono[950],

  brand: colors.info[400],
} as const;
