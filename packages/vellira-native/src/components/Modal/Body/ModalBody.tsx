import { View } from 'react-native';

import { styles } from './ModalBody.styles';
import type { ModalBodyProps } from './types';

export const ModalBody = ({ children, style }: ModalBodyProps) => {
  return <View style={[styles.body, style]}>{children}</View>;
};

ModalBody.displayName = 'ModalBody';
