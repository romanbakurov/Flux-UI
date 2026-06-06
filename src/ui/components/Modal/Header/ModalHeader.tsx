import type { ModalHeaderProps } from './types';
import styles from './ModalHeader.module.scss';
import CloseIcon from '@/assets/icons/Close.svg?react';
import { useModalContext } from '../ModalContext';

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <div className={styles.modalHeader}>
      <h2 className={styles.modalHeaderTitle}>{children}</h2>

      {onClose && (
        <button
          type='button'
          className={styles.modalHeaderCloseButton}
          onClick={onClose}
          aria-label='Close modal'
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
