import type { ElementType, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './lead.module.css';

export type LeadProps = {
  children: ReactNode;
  /** Rendered tag — defaults to `p`. */
  as?: ElementType;
  className?: string;
};

/**
 * Larger lead-paragraph style used for a section's opening statement (Hero's
 * "I'm a front-end developer...", a Works client's deliverables blurb). Supports
 * `<em>` (accent color), `<strong>` (bold), and `<a>` (accent + underline).
 */
export const Lead: FC<LeadProps> = ({ children, as: Tag = 'p', className }) => (
  <Tag className={clsx(styles.lead, className)}>{children}</Tag>
);
