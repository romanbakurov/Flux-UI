import type { GestureResponderEvent } from 'react-native';

import type { BaseButtonProps } from '../../common/button';

export interface ButtonProps extends BaseButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
}
