import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    maxWidth: 420,
    padding: theme.spacing[5],
    backgroundColor: theme.colors.gray[0],
    borderRadius: theme.radius.xl,
    gap: theme.spacing[4],
  },
});
