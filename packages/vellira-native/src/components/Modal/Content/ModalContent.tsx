import { View } from 'react-native';

import { styles } from './ModalContent.styles';
import type { ModalContentProps } from './types';

export const ModalContent = ({ children, style }: ModalContentProps) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

ModalContent.displayName = 'ModalContent';
