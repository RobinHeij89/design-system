import { useId } from 'react';
import type { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon } from '../icons/icons';
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
        <Icon id="check" className={styles.checkbox__check} />
      </span>
      <span className={styles.checkbox__label}>{label}</span>
    </label>
  );
};
