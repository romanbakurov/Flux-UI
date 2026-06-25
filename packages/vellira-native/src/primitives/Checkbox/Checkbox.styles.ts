import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  boxDisabled: {
    backgroundColor: theme.colors.surface.subtle,
    borderColor: theme.colors.interactive.disabledForeground,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.interactive.primary,
    borderRadius: theme.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: theme.colors.interactive.primary,
    borderColor: theme.colors.interactive.primary,
  },

  label: {
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    color: theme.colors.text.primary,
  },
  labelDisabled: {
    color: theme.colors.text.disabled,
  },

  container: {
    gap: 4,
  },

  boxError: {
    borderColor: theme.colors.border.danger,
  },

  errorText: {
    color: theme.colors.status.error,
    fontSize: theme.typography.size.sm,
  },
});
