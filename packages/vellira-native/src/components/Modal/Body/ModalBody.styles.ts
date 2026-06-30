import { StyleSheet } from 'react-native';

import type { NativeTheme } from '../../../theme';

export const createStyles = (theme: NativeTheme) =>
  StyleSheet.create({
    body: {
      paddingBottom: theme.tokens.spacing[4],
    },
  });
