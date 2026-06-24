import { useCallback, useState } from 'react';

import type { FloatingPlacement } from '@romanbakurov/vellira-types';
import type { RefObject } from 'react';
import type { View } from 'react-native';
import { Dimensions } from 'react-native';

interface Position {
  top: number;
  left: number;
}

export function useNativeFloatingPosition(
  placement: FloatingPlacement = 'top',
  offset = 8
) {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

  const clampLeft = useCallback((left: number) => {
    const screenWidth = Dimensions.get('window').width;
    const safePadding = 12;
    const estimatedWidth = 240;

    return Math.min(
      Math.max(left, safePadding),
      screenWidth - estimatedWidth - safePadding
    );
  }, []);

  const updatePosition = useCallback(
    (triggerRef: RefObject<View | null>) => {
      const node = triggerRef.current;

      if (!node || typeof node.measureInWindow !== 'function') {
        setPosition({ top: 0, left: 0 });
        return;
      }

      node.measureInWindow((x, y, width, height) => {
        const side = placement.split('-')[0];

        if (side === 'bottom') {
          setPosition({
            top: y + height + offset,
            left: clampLeft(x),
          });
          return;
        }

        if (side === 'left') {
          setPosition({
            top: y + height / 2,
            left: clampLeft(x),
          });
          return;
        }

        if (side === 'right') {
          setPosition({
            top: y + height / 2,
            left: clampLeft(x),
          });
          return;
        }

        setPosition({
          top: y - offset,
          left: clampLeft(x),
        });
      });
    },
    [placement, offset, clampLeft]
  );

  return { position, updatePosition };
}
