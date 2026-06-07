import { useId } from 'react';
import type { ModalProps } from './types';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './Content/ModalContent';
import ModalContext from './ModalContext';

/**
 * Accessible modal dialog.
 *
 * @remarks
 * Modal.Header is required for accessibility.
 * It provides the title used by aria-labelledby.
 */

export const Modal = ({
  isOpen,
  children,
  onClose,
  closeOnClick = true,
}: ModalProps) => {
  const titleId = useId();
  const descriptionId = useId();

  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose, titleId, descriptionId }}>
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
