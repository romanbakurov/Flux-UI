import { StyleSheet } from 'react-native';

import { theme } from '@romanbakurov/flux-ui-tokens/native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.md,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },

  text: {
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
