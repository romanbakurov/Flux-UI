import { Modal as BaseModal } from './Modal';
import { ModalHeader } from './Header/ModalHeader';
import { ModalBody } from './Body/ModalBody';
import { ModalFooter } from './Footer/ModalFooter';
import { ModalContent } from './Content/ModalContent';

export type { ModalProps } from './types';

export const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  Body: ModalBody,
  Content: ModalContent,
  Footer: ModalFooter,
});
