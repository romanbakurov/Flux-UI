import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  size,
} from '@floating-ui/react';
import type { Placement, Middleware } from '@floating-ui/react';

type UseFloatingPositionProps = {
  placement?: Placement;
  matchTriggerWidth?: boolean;
};

//Позиционирование dropdown / tooltip / popover
export const useFloatingPosition = ({
  placement = 'bottom-start',
  matchTriggerWidth = false,
}: UseFloatingPositionProps = {}) => {
  const middleware: Middleware[] = [offset(4), flip(), shift()];

  if (matchTriggerWidth) {
    middleware.push(
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      })
    );
  }

  const { refs, floatingStyles, update } = useFloating({
    placement,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  return {
    floatingStyles,
    setRef: refs.setReference,
    setFloatingRef: refs.setFloating,
    updatePosition: update,
  };
};
