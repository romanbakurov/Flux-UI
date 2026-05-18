import styles from './Input.module.scss';
import { cn } from '@/ui/utils/cn';
import { FormField } from '../FormField';
import type { InputProps } from './types';

export const Input = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  size = 'md',
  error,
  disabled,
  required,
}: InputProps) => {
  return (
    <FormField id={id} label={label} error={error} required={required}>
      <input
        id={id}
        className={cn(styles.input, styles[size], {
          [styles.error]: !!error,
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        {...(error ? { 'aria-labelledby': `${id}-error` } : {})}
      />
    </FormField>
  );
};
