import type React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;

  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  closeOnClick: boolean;
}

export interface ModalOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  closeOnClick?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  zIndex?: number;
  animated?: boolean;
}
