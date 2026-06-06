import type { ModalProps } from './types';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './Content/ModalContent';
import ModalContext from './ModalContext';

export const Modal = ({
  isOpen,
  children,
  onClose,
  closeOnClick = true,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose }}>
      <ModalOverlay
        isOpen={isOpen}
        onClose={onClose}
        closeOnClick={closeOnClick}
      >
        <ModalContent>{children}</ModalContent>
      </ModalOverlay>
    </ModalContext.Provider>
  );
};
