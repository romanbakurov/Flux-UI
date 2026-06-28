import { colors } from '../../primitives/colors.js';

export const text = {
  primary: colors.vellira[50],
  secondary: colors.vellira[100],
  muted: colors.vellira[200],
  disabled: colors.vellira[300],

  inverse: colors.mono[50],

  brand: colors.primary[200],
} as const;
