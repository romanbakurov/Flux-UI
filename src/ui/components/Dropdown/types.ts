import { ReactNode } from 'react';

export interface DropdownItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  label?: string;
  trigger: ReactNode;
  items: DropdownItem[];
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}
