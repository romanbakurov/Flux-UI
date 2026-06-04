import { ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';

export interface DropdownMenuItem {
  type?: 'item';

  label: string;
  value: string;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
}

export interface DropdownGroup {
  type: 'group';
  label: string;
}

export interface DropdownSeparator {
  type: 'separator';
}

export type DropdownItem = DropdownMenuItem | DropdownGroup | DropdownSeparator;

export interface DropdownProps {
  label?: string;
  trigger?: ReactNode;
  icon?: ReactNode;
  items: DropdownItem[];
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  rotateAngle?: number;
  matchTriggerWidth?: boolean;
  placement?: Placement;
}

export interface DropdownTriggerProps {
  children?: ReactNode;
  isOpen: boolean;
  disabled?: boolean;
  label?: string;
  icon?: ReactNode;
  rotateAngle?: number;
  arrowIcon?: ReactNode;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  'aria-expanded': boolean;
  'aria-haspopup': boolean;
  'aria-controls'?: string;
  'aria-label'?: string;
  className?: string;
}

export interface DropdownContentProps {
  children: ReactNode;
  floatingStyles: React.CSSProperties;
  menuId: string;
  role?: string;
  className?: string;
}

export type DropdownItemProps = DropdownMenuItem & {
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
};

export const isMenuItem = (item: DropdownItem): item is DropdownMenuItem =>
  item.type !== 'group' && item.type !== 'separator';

export const isGroup = (item: DropdownItem): item is DropdownGroup =>
  item.type === 'group';

export const isSeparator = (item: DropdownItem): item is DropdownSeparator =>
  item.type === 'separator';
