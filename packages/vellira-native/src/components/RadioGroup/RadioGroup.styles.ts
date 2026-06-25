import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  group: {
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    gap: theme.spacing[3],
  },

  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  option: {
    minWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[2],
  },

  optionDisabled: {
    opacity: 0.6,
  },

  radio: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.border.strong,
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: theme.colors.surface.default,
  },

  radioSelected: {
    borderColor: theme.colors.interactive.primary,
  },

  radioDisabled: {
    borderColor: theme.colors.border.strong,
    backgroundColor: theme.colors.surface.muted,
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.interactive.primary,
    borderRadius: 999,
  },

  dotDisabled: {
    backgroundColor: theme.colors.interactive.disabledForeground,
  },

  label: {
    minWidth: 0,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  labelDisabled: {
    color: theme.colors.text.disabled,
  },
});
