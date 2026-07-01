import type {
  BaseInputProps,
  InputSize,
  InputType,
} from '@romanbakurov/vellira-types';
import type { ReactElement } from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type { InputSize, InputType } from '@romanbakurov/vellira-types';

export type NativeInputKeyboardType = TextInputProps['keyboardType'];

export type InputIconElement = ReactElement<{
  color?: string;
  size?: number;
}>;

export interface InputProps
  extends
    BaseInputProps,
    Omit<
      TextInputProps,
      | 'value'
      | 'defaultValue'
      | 'onChange'
      | 'onChangeText'
      | 'editable'
      | 'style'
      | 'placeholder'
    > {
  label: string;
  placeholder?: string;
  size?: InputSize;
  error?: string;
  type?: InputType;
  leftIcon?: InputIconElement;
  iconSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}
