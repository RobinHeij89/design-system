import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Icon, type IconId } from '../icons/icons';
import styles from './alert.module.css';

export type AlertVariant = 'info' | 'success' | 'error' | 'warning';

export type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  onDismiss?: () => void;
  className?: string;
};

const ICON: Record<AlertVariant, IconId> = {
  info: 'info',
  success: 'check',
  error: 'error',
  warning: 'warning',
};

export const Alert: FC<AlertProps> = ({ variant = 'info', title, children, onDismiss, className }) => (
  <div role="alert" className={clsx(styles.alert, styles[variant], className)}>
    <span className={styles.icon} aria-hidden="true"><Icon id={ICON[variant]} /></span>
    <div className={styles.body}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.content}>{children}</div>
    </div>
    {onDismiss && (
      <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss">
        <Icon id="close" />
      </button>
    )}
  </div>
);
