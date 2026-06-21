import { useEffect, useRef } from 'react';

import { ChevronDown } from '@romanbakurov/vellira-icons';
import { theme } from '@romanbakurov/vellira-tokens';
import { Animated, Easing, Pressable, Text } from 'react-native';

import { styles } from './SelectTrigger.styles';
import type { SelectTriggerProps } from './types';

export function SelectTrigger({
  triggerRef,
  displayText,
  isPlaceholder,
  isOpen,
  disabled = false,
  hasError = false,
  accessibilityLabel,
  triggerStyle,
  textStyle,
  onPress,
}: SelectTriggerProps) {
  const rotation = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: isOpen ? 1 : 0,
      duration: 160,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [isOpen, rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Pressable
      ref={triggerRef}
      disabled={disabled}
      accessibilityRole='button'
      accessibilityLabel={accessibilityLabel}
      accessibilityHint='Opens a list of options'
      accessibilityState={{
        expanded: isOpen,
        disabled,
      }}
      onPress={onPress}
      style={[
        styles.trigger,
        isOpen && styles.triggerOpen,
        hasError && styles.triggerError,
        disabled && styles.triggerDisabled,
        triggerStyle,
      ]}
    >
      <Text
        numberOfLines={1}
        style={[
          styles.text,
          isPlaceholder && styles.placeholder,
          disabled && styles.textDisabled,
          textStyle,
        ]}
      >
        {displayText}
      </Text>

      <Animated.View
        style={[
          styles.icon,
          disabled && styles.iconDisabled,
          {
            transform: [{ rotate }],
          },
        ]}
        accessibilityElementsHidden
        importantForAccessibility='no'
      >
        <ChevronDown
          width={16}
          height={16}
          color={disabled ? theme.colors.gray[500] : theme.colors.gray[600]}
        />
      </Animated.View>
    </Pressable>
  );
}

SelectTrigger.displayName = 'SelectTrigger';
