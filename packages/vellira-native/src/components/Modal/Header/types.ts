import type { BaseModalHeaderProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ModalHeaderProps extends BaseModalHeaderProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
