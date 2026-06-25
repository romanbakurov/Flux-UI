import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    alignSelf: 'flex-start',
  },

  overlay: {
    ...StyleSheet.absoluteFill,
  },

  bubble: {
    position: 'absolute',
    zIndex: 1000,

    backgroundColor: theme.colors.surface.inverse,
    borderRadius: theme.radius.md,

    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],

    shadowColor: theme.colors.surface.inverse,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 4,
  },

  text: {
    color: theme.colors.text.inverse,
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.xs,
    lineHeight: theme.typography.lineHeight.sm,
    textAlign: 'center',
  },
});
