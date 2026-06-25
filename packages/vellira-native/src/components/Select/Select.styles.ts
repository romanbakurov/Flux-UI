import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colors.overlay.backdrop,
  },

  sheet: {
    backgroundColor: theme.colors.surface.elevated,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    overflow: 'hidden',
  },

  toolbar: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing[4],
    borderBottomColor: theme.colors.divider.muted,
    borderBottomWidth: 1,
  },

  title: {
    color: theme.colors.text.primary,
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },

  cancelText: {
    color: theme.colors.text.secondary,
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },

  doneText: {
    color: theme.colors.interactive.primary,
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },

  picker: {
    width: '100%',
  },
});
