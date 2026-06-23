import { Close } from '@romanbakurov/vellira-icons';
import { Pressable, Text, View } from 'react-native';

import { useModalContext } from '../ModalContext';

import { styles } from './ModalHeader.styles';
import type { ModalHeaderProps } from './types';

export const ModalHeader = ({
  children,
  style,
  textStyle,
}: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <View style={[styles.header, style]}>
      <Text style={[styles.title, textStyle]}>{children}</Text>

      {onClose && (
        <Pressable
          accessibilityRole='button'
          accessibilityLabel='Close modal'
          onPress={onClose}
          style={styles.closeButton}
        >
          <Close size={16} />
        </Pressable>
      )}
    </View>
  );
};

ModalHeader.displayName = 'ModalHeader';
