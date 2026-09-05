import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './badge.module.css';

export type BadgeVariant = 'neutral' | 'success' | 'error' | 'warning';

export type BadgeProps = {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
};

export const Badge: FC<BadgeProps> = ({ variant = 'neutral', children, className }) => (
  <span className={clsx(styles.badge, styles[variant], className)}>{children}</span>
);
