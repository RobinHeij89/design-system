import { useId } from 'react';
import type { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './text-field.module.css';

export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  label: string;
  /** Error message — also switches the field into an error state. */
  error?: string;
  /** Helper text shown below the field when there's no error. */
  helperText?: string;
  id?: string;
};

export const TextField: FC<TextFieldProps> = ({ label, error, helperText, id, className, required, ...rest }) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;

  return (
    <div className={clsx(styles.field, className)}>
      <label htmlFor={inputId} className={styles.field__label}>
        {label}
        {required && <span className={styles.field__required} aria-hidden="true"> *</span>}
      </label>
      <input
        id={inputId}
        className={clsx(styles.field__input, error && styles['field__input--error'])}
        aria-invalid={!!error}
        aria-describedby={error || helperText ? messageId : undefined}
        required={required}
        {...rest}
      />
      {(error || helperText) && (
        <p id={messageId} className={clsx(styles.field__message, error && styles['field__message--error'])}>
          {error ?? helperText}
        </p>
      )}
    </div>
  );
};
