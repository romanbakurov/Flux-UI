import type { ReactNode } from 'react';

import type { BaseButtonProps } from '@romanbakurov/flux-ui-types';

export interface ButtonProps extends BaseButtonProps {
  children: ReactNode;

  onPress?: () => void;
}
