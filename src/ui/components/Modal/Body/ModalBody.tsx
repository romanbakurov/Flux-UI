import type { ModalBodyProps } from './types';
import styles from './ModalBody.module.scss';
import { useModalContext } from '../ModalContext';

export const ModalBody = ({ children }: ModalBodyProps) => {
  const { descriptionId } = useModalContext();

  return (
    <div id={descriptionId} className={styles.modalBody}>
      {children}
    </div>
  );
};
