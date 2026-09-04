import { useId } from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import type { FC, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './tooltip.module.css';

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = {
  content: ReactNode;
  side?: TooltipSide;
  /** A single focusable/hoverable element (e.g. a button or link). */
  children: ReactElement<{ 'aria-describedby'?: string }>;
  className?: string;
};

export const Tooltip: FC<TooltipProps> = ({ content, side = 'top', children, className }) => {
  const id = useId();
  const child = Children.only(children);

  const trigger = isValidElement(child)
    ? cloneElement(child, { 'aria-describedby': id })
    : child;

  return (
    <span className={clsx(styles.tooltip, className)}>
      {trigger}
      <span role="tooltip" id={id} className={clsx(styles.bubble, styles[side])}>
        {content}
      </span>
    </span>
  );
};
