import { cn } from '@utils/cn';
import styles from '../Dropdown.module.scss';
import type { DropdownItemProps } from '../types';

export const DropdownItem = ({
  label,
  icon,
  danger,
  disabled,
  active,
  onClick,
  onMouseEnter,
}: DropdownItemProps) => {
  return (
    <li
      role='menuitem'
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={disabled ? undefined : onMouseEnter}
      className={cn(styles.item, {
        [styles.active]: active,
        [styles.disabled]: disabled,
        [styles.danger]: danger,
      })}
    >
      {icon && (
        <span aria-hidden='true' className={styles.itemIcon}>
          {icon}
        </span>
      )}
      {label}
    </li>
  );
};
