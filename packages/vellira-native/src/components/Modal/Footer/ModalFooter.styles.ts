import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    gap: theme.spacing[3],
    justifyContent: 'flex-end',
  },
});
