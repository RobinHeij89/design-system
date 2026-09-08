import type { ElementType, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './card.module.css';

export type CardProps = {
  children: ReactNode;
  /** Rendered tag — defaults to `div`. Use `article` for a self-contained item inside a list of cards. */
  as?: ElementType;
  /** Marks the card as done/inactive — dims it without removing it (e.g. a completed checklist row). */
  done?: boolean;
  className?: string;
};

export const Card: FC<CardProps> = ({ children, as: Tag = 'div', done = false, className }) => (
  <Tag className={clsx(styles.card, done && styles.done, className)}>{children}</Tag>
);
