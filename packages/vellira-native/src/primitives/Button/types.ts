import type { BaseButtonProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface ButtonProps extends BaseButtonProps {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
  iconSize?: number;
}
