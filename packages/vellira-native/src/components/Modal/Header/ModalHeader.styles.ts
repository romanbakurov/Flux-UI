import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[3],
    justifyContent: 'space-between',
  },

  title: {
    color: theme.colors.gray[900],
    flex: 1,
    fontFamily: theme.typography.family.semibold,
    fontSize: theme.typography.size.lg,
    lineHeight: theme.typography.lineHeight.md,
  },

  closeButton: {
    alignItems: 'center',
    borderRadius: theme.radius.full,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
});
