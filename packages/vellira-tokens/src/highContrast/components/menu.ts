import { colors } from '../../primitives/colors.js';

export const menu = {
  itemFg: colors.mono[50],

  itemHoverBg: colors.warning[500],
  itemHoverFg: colors.mono[950],

  itemActiveBg: colors.warning[500],
  itemActiveFg: colors.mono[950],
  itemFocusRing: colors.warning[500],

  itemDangerFg: colors.error[300],
  itemDangerHoverBg: colors.warning[500],
  itemDangerHoverFg: colors.mono[950],
  itemDangerActiveBg: colors.warning[500],
  itemDangerActiveFg: colors.mono[950],

  triggerFg: colors.mono[50],
  triggerHoverBg: colors.warning[500],
  triggerHoverFg: colors.mono[950],
  triggerHoverRing: 'transparent',

  itemDisabledFg: colors.gray[600],
  itemDisabledBg: colors.gray[900],

  groupLabelFg: colors.gray[400],
} as const;
