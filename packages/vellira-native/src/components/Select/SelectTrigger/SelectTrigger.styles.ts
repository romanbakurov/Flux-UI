import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  trigger: {
    minHeight: 46,
    width: '100%',
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    backgroundColor: theme.colors.surface.default,
    borderColor: theme.colors.border.default,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
  },

  triggerOpen: {
    borderColor: theme.colors.border.focus,
  },

  triggerError: {
    borderColor: theme.colors.border.danger,
  },

  triggerDisabled: {
    backgroundColor: theme.colors.surface.muted,
    opacity: 0.6,
  },

  text: {
    flex: 1,
    minWidth: 0,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  textDisabled: {
    color: theme.colors.text.disabled,
  },

  placeholder: {
    color: theme.colors.text.muted,
  },

  icon: {
    width: 16,
    height: 16,
    marginLeft: theme.spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconOpen: {
    transform: [{ rotate: '180deg' }],
  },
});
