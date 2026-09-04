import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './alert.module.css';

export type AlertVariant = 'info' | 'success' | 'error' | 'warning';

export type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  onDismiss?: () => void;
  className?: string;
};

const ICON: Record<AlertVariant, string> = {
  info: 'i',
  success: '✓',
  error: '!',
  warning: '!',
};

export const Alert: FC<AlertProps> = ({ variant = 'info', title, children, onDismiss, className }) => (
  <div role="alert" className={clsx(styles.alert, styles[`alert--${variant}`], className)}>
    <span className={styles.alert__icon} aria-hidden="true">{ICON[variant]}</span>
    <div className={styles.alert__body}>
      {title && <p className={styles.alert__title}>{title}</p>}
      <div className={styles.alert__content}>{children}</div>
    </div>
    {onDismiss && (
      <button type="button" className={styles.alert__dismiss} onClick={onDismiss} aria-label="Dismiss">
        ×
      </button>
    )}
  </div>
);
