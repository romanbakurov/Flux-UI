import { View } from 'react-native';

import { styles } from './ModalFooter.styles';
import type { ModalFooterProps } from './types';

export const ModalFooter = ({ children, style }: ModalFooterProps) => {
  return <View style={[styles.footer, style]}>{children}</View>;
};

ModalFooter.displayName = 'ModalFooter';
