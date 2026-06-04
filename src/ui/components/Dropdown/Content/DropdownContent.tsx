import styles from '../Dropdown.module.scss';
import { cn } from '@utils/cn';
import { createPortal } from 'react-dom';
import type { DropdownContentProps } from '../types';
import { forwardRef } from 'react';

export const DropdownContent = forwardRef<
  HTMLUListElement,
  DropdownContentProps
>(({ children, floatingStyles, menuId, className }, ref) => {
  return createPortal(
    <ul
      ref={ref}
      id={menuId}
      role='menu'
      style={floatingStyles}
      className={cn(styles.dropdown, className)}
    >
      {children}
    </ul>,
    document.body
  );
});

DropdownContent.displayName = 'DropdownContent';
