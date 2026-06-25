import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    minHeight: 48,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[3],
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },

  itemPressed: {
    backgroundColor: theme.colors.interactive.neutral,
  },

  itemDisabled: {
    opacity: 0.45,
  },

  itemDanger: {
    backgroundColor: theme.colors.status.errorMuted,
  },

  itemText: {
    flex: 1,
    minWidth: 0,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  itemTextDisabled: {
    color: theme.colors.text.disabled,
  },

  dangerText: {
    color: theme.colors.status.error,
  },
});
