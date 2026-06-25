import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing[5],
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colors.overlay.backdrop,
  },
});
