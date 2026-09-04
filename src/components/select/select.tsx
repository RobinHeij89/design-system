import { useId } from 'react';
import type { FC, SelectHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './select.module.css';

export type SelectOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> & {
  label: string;
  options: SelectOption[];
  error?: string;
  id?: string;
};

export const Select: FC<SelectProps> = ({ label, options, error, id, className, required, ...rest }) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const messageId = `${selectId}-message`;

  return (
    <div className={clsx(styles.field, className)}>
      <label htmlFor={selectId} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      <div className={styles.control}>
        <select
          id={selectId}
          className={clsx(styles.select, error && styles.error)}
          aria-invalid={!!error}
          aria-describedby={error ? messageId : undefined}
          required={required}
          {...rest}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {error && (
        <p id={messageId} className={clsx(styles.message, styles.error)}>{error}</p>
      )}
    </div>
  );
};
