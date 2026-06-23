import { Modal as RNModal, Pressable, View } from 'react-native';

import { styles } from './Modal.styles';
import type { ModalOverlayProps } from './types';

export const ModalOverlay = ({
  isOpen,
  onClose,
  closeOnBackdrop = true,
  children,
  overlayStyle,
}: ModalOverlayProps) => {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType='fade'
      onRequestClose={onClose}
    >
      <View style={[styles.overlay, overlayStyle]}>
        <Pressable
          testID='modal-backdrop'
          accessibilityRole='button'
          accessibilityLabel='Close modal'
          style={styles.backdrop}
          onPress={closeOnBackdrop ? onClose : undefined}
        />

        {children}
      </View>
    </RNModal>
  );
};
