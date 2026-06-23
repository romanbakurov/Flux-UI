import type { BaseModalContentProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface ModalContentProps extends BaseModalContentProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
