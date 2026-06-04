import styles from './Input.module.scss';
import { cn } from '@utils/cn';
import { FormField } from '../FormField';
import type { InputProps } from './types';
import { forwardRef, useState, useRef, useEffect } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      placeholder,
      value,
      onChange,
      size = 'md',
      error,
      disabled,
      required,
      className,
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const checkOverflow = () => {
      if (inputRef.current) {
        const isOverflowing =
          inputRef.current.scrollWidth > inputRef.current.clientWidth;
        setIsOverflowing(isOverflowing);
      }
    };

    useEffect(() => {
      checkOverflow();
      window.addEventListener('resize', checkOverflow);
      return () => window.removeEventListener('resize', checkOverflow);
    }, [value]);

    const setRefs = (element: HTMLInputElement | null) => {
      inputRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <FormField id={id} label={label} error={error} required={required}>
        <div className={styles.inputWrapper}>
          <input
            ref={setRefs}
            id={id}
            className={cn(
              styles.input,
              styles[size],
              {
                [styles.error]: !!error,
                [styles.withElipsis]: true,
              },
              className
            )}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={!!error}
            onMouseEnter={() => isOverflowing && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
          {showTooltip && isOverflowing && value && (
            <div className={styles.tooltip}>{value}</div>
          )}
        </div>
      </FormField>
    );
  }
);

Input.displayName = 'Input';
