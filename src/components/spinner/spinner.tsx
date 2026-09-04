import type { FC } from 'react';
import clsx from 'clsx';
import styles from './spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export type SpinnerProps = {
  size?: SpinnerSize;
  /** Accessible label — spinners have no visible text, so this is required for screen readers. */
  label?: string;
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({ size = 'md', label = 'Loading', className }) => (
  <span role="status" className={clsx(styles.spinner, styles[`spinner--${size}`], className)}>
    <svg viewBox="0 0 24 24" fill="none" className={styles.spinner__svg}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
    <span className={styles.spinner__srOnly}>{label}</span>
  </span>
);
