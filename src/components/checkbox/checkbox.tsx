import { useId } from 'react';
import type { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './checkbox.module.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> & {
  label: string;
  id?: string;
};

export const Checkbox: FC<CheckboxProps> = ({ label, id, className, ...rest }) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label htmlFor={inputId} className={clsx(styles.checkbox, className)}>
      <input id={inputId} type="checkbox" className={styles.checkbox__input} {...rest} />
      <span className={styles.checkbox__box} aria-hidden="true">
        <svg viewBox="0 0 16 16" className={styles.checkbox__check}>
          <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={styles.checkbox__label}>{label}</span>
    </label>
  );
};
