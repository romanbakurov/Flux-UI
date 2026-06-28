import { colors } from '../../primitives/colors.js';

export const menu = {
  itemFg: colors.mono[50],
  itemHoverBg: colors.gray[800],
  itemHoverFg: colors.mono[50],
  itemActiveBg: colors.gray[800],
  itemActiveFg: colors.mono[50],
  itemFocusRing: colors.warning[500],

  itemDangerFg: colors.error[300],
  itemDangerHoverBg: colors.error[300],
  itemDangerHoverFg: colors.mono[950],
  itemDangerActiveBg: colors.error[300],
  itemDangerActiveFg: colors.mono[950],

  triggerFg: colors.mono[50],
  triggerHoverBg: colors.gray[900],
  triggerHoverFg: colors.mono[50],
  triggerHoverRing: colors.warning[500],

  itemDisabledFg: colors.gray[600],
  itemDisabledBg: colors.gray[900],

  groupLabelFg: colors.gray[400],
} as const;
