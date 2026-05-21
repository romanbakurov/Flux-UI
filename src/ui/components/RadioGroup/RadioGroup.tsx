import type { RadioGroupProps } from './types';
import { FormField } from '../FormField';
import { useControllableState } from '@hooks/useControllableState';
import styles from './RadioGroup.module.scss';
import { useId } from 'react';
import { cn } from '@utils/cn';

export const RadioGroup = ({
  label,
  value,
  defaultValue,
  onChange,
  options,
  name,
  required,
  disabled,
  error,
  className,
  orientation,
}: RadioGroupProps) => {
  const id = useId();

  const [selectValue, setSelectValue] = useControllableState({
    value,
    defaultValue,
    onChange,
  });

  return (
    <FormField label={label} id={id} required={required} error={error}>
      <div
        className={cn(styles.group, styles[orientation], className)}
        role='radiogroup'
        aria-required={required}
        aria-invalid={!!error}
      >
        {options.map((option) => {
          const optionId = `${id}-${option.value}`;

          return (
            <label
              htmlFor={optionId}
              key={option.value}
              className={cn(styles.option, {
                [styles.disabled]: disabled || option.disabled,
              })}
            >
              <input
                id={optionId}
                type='radio'
                name={name}
                value={option.value}
                checked={selectValue === option.value}
                disabled={disabled || option.disabled}
                onChange={() => setSelectValue(option.value)}
                className={styles.input}
              />
              <span className={styles.customRadio} />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </FormField>
  );
};
