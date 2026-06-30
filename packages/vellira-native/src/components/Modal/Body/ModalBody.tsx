import { View } from 'react-native';

import { useThemeStyles } from '../../../theme';

import { createStyles } from './ModalBody.styles';
import type { ModalBodyProps } from './types';

export const ModalBody = ({ children, style }: ModalBodyProps) => {
  const styles = useThemeStyles(createStyles);

  return <View style={[styles.body, style]}>{children}</View>;
};

ModalBody.displayName = 'ModalBody';
