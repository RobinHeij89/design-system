import { useId } from 'react';
import type { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './radio.module.css';

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'> & {
  label: string;
  id?: string;
};

export const Radio: FC<RadioProps> = ({ label, id, className, ...rest }) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label htmlFor={inputId} className={clsx(styles.radio, className)}>
      <input id={inputId} type="radio" className={styles.input} {...rest} />
      <span className={styles.circle} aria-hidden="true">
        <span className={styles.dot} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};
