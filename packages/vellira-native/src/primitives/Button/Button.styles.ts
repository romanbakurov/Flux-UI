import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: theme.radius.md,
  },

  fullWidth: {
    alignSelf: 'stretch',
  },

  text: {
    fontFamily: theme.typography.family.regular,
    color: theme.colors.gray[0],
    fontWeight: theme.typography.weight.medium,
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    opacity: 0.8,
  },
});
