import type { ModalOverlayProps } from './types';
import { cn } from '@utils/cn';
import { useCallback, useRef, useEffect } from 'react';
import { Portal } from '@ui/overlay/Portal';
import { useModalKeyboard } from '@hooks/useModalKeyboard';
import { useModalContext } from './ModalContext';
import styles from './ModalOverlay.module.scss';

export const ModalOverlay = ({
  children,
  onClose,
  isOpen,
  className,
  closeOnClick = true,
  closeOnEsc = true,
  zIndex = 1000,
  animated = true,
}: ModalOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { titleId, descriptionId } = useModalContext();

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!closeOnClick) return;

      if (e.target === e.currentTarget) {
        onClose?.();
      }
    },
    [closeOnClick, onClose]
  );

  useModalKeyboard({ isOpen, onClose: closeOnEsc ? onClose : undefined });

  useEffect(() => {
    if (isOpen) {
      overlayRef.current?.focus();
    } else {
      const previouslyFocused = document.activeElement as HTMLElement;
      if (previouslyFocused) {
        previouslyFocused.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen && !animated) return null;

  return (
    <Portal>
      <div
        ref={overlayRef}
        className={cn(
          styles.overlay,
          isOpen && styles['overlay--open'],
          animated && styles['overlay--animated'],
          className
        )}
        onClick={handleOverlayClick}
        tabIndex={-1}
        role='presentation'
        aria-hidden={!isOpen}
        style={{ zIndex }}
      >
        <div
          ref={modalRef}
          className={styles.modal}
          role='dialog'
          aria-modal='true'
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

ModalOverlay.displayName = 'ModalOverlay';
