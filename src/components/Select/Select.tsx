import React from 'react';
import { cn } from '@/utils/cn';
import styles from './Select.module.scss';

export type SelectOptions = {
  label: string;
  value: string;
};

export interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOptions[];

  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled,
  error,
}: SelectProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <select
        className={cn(styles.select, {
          [styles.error]: !!error,
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value='' disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
