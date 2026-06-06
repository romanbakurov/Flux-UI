import type { ModalBodyProps } from './types';
import styles from './ModalBody.module.scss';

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className={styles.modalBody}>{children}</div>;
};
