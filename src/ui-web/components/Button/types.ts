import type React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  ariaLabel?: string | false;
  children: React.ReactNode;
  variant?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}
