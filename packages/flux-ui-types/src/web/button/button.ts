import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { BaseButtonProps } from '../../common/button';

export interface ButtonProps
  extends
    BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: ReactNode;
}
