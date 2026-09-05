import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './stat.module.css';

export type StatProps = {
  label: ReactNode;
  value: ReactNode;
  className?: string;
};

export const Stat: FC<StatProps> = ({ label, value, className }) => (
  <div className={clsx(styles.stat, className)}>
    <div className={styles.label}>{label}</div>
    <div className={styles.value}>{value}</div>
  </div>
);

export type StatRowProps = {
  children: ReactNode;
  className?: string;
};

/** Lays out `Stat` items in a 3-column grid that collapses to 1 column on small screens. */
export const StatRow: FC<StatRowProps> = ({ children, className }) => (
  <div className={clsx(styles.row, className)}>{children}</div>
);
