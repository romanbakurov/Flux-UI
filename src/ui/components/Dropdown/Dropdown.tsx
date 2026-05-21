import type { DropdownProps } from './type';
import { cn } from '@utils/cn';
import { createPortal } from 'react-dom';
import { useState, useRef, useId } from 'react';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { useFloatingPosition } from '@hooks/useFloatingPosition';
import { useKeyboardNavigation } from '@hooks/useKeyboardNavigation';
import styles from './Dropdown.module.scss';
import DropdownMenu from '@/assets/icons/DropdownMenu.svg?react';

export const Dropdown = ({
  label,
  trigger,
  items,
  onSelect,
  className,
  disabled,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuId = useId();

  const { position, setRef, updatePosition } = useFloatingPosition();

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => {
      const next = !prev;
      if (next) updatePosition();
      setActiveIndex(next ? 0 : -1);
      return next;
    });
  };

  const close = () => {
    setIsOpen(false);
  };

  const { onKeyDown } = useKeyboardNavigation({
    activeIndex,
    setActiveIndex,
    itemsCount: items.length,
    isOpen,
    onOpen: toggleOpen,
    onSelect: () => {
      const item = items[activeIndex];
      if (!item || item.disabled) return;

      onSelect?.(item.value);
      close();
    },
    onClose: () => close(),
  });

  useOutsideClick([buttonRef, menuRef], () => close(), isOpen);

  const triggerRef = (el: HTMLButtonElement | null) => {
    buttonRef.current = el;
    setRef(el);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <button
        ref={triggerRef}
        type='button'
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup='menu'
        aria-controls={menuId}
        aria-label={
          label ? label : typeof trigger === 'string' ? trigger : undefined
        }
        className={cn(styles.button, {
          [styles.disabled]: disabled,
        })}
      >
        {trigger}
        <span
          className={cn(styles.icon, {
            [styles.open]: isOpen,
          })}
        >
          <DropdownMenu />
        </span>
      </button>

      {isOpen &&
        createPortal(
          <ul
            ref={menuRef}
            id={menuId}
            role='menu'
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              width: position.width,
              zIndex: 9999,
            }}
            className={styles.dropdown}
          >
            {items.map((item, index) => (
              <li
                key={item.value}
                role='menuitem'
                aria-disabled={item.disabled}
                onClick={() => {
                  if (!item.disabled) {
                    onSelect?.(item.value);
                    close();
                  }
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(styles.item, {
                  [styles.active]: activeIndex === index,
                  [styles.disabled]: item.disabled,
                  [styles.danger]: item.danger,
                })}
              >
                {item.icon && (
                  <span className={styles.itemIcon}>{item.icon}</span>
                )}
                {item.label}
              </li>
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
};
