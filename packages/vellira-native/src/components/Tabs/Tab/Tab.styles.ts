import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    gap: theme.spacing[2],
    justifyContent: 'center',
    minHeight: 38,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  },

  tabVertical: {
    flex: 0,
    width: '100%',
    justifyContent: 'flex-start',
  },

  tabActive: {
    backgroundColor: 'transparent',
  },

  tabUnderline: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    borderRadius: 0,
  },

  tabUnderlineActive: {
    borderBottomColor: theme.colors.interactive.primary,
  },

  tabDisabled: {
    opacity: 0.45,
  },

  tabText: {
    color: theme.colors.text.secondary,
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.sm,
  },

  tabTextActive: {
    color: theme.colors.interactive.primary,
  },

  tabTextPillsActive: {
    color: theme.colors.text.inverse,
  },

  tabPillsActive: {
    backgroundColor: theme.colors.interactive.primary,
  },

  tabDefaultActive: {
    backgroundColor: 'transparent',
  },

  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabIconActive: {
    color: theme.colors.interactive.primary,
  },

  tabIconPillsActive: {
    color: theme.colors.text.inverse,
  },
});
