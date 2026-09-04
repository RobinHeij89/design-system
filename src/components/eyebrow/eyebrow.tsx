import type { ElementType, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './eyebrow.module.css';

export type EyebrowProps = {
  children: ReactNode;
  /** Rendered tag — defaults to `span`. */
  as?: ElementType;
  className?: string;
};

/**
 * Small mono, uppercase, wide-tracked label used above/beside a heading or
 * list ("Direct", "Expertise", "09 brands"). Appears identically across the
 * site — this is the one shared source now instead of four copies.
 */
export const Eyebrow: FC<EyebrowProps> = ({ children, as: Tag = 'span', className }) => (
  <Tag className={clsx(styles.eyebrow, className)}>{children}</Tag>
);
