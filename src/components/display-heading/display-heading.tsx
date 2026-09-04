import type { ElementType, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './display-heading.module.css';

export type DisplayHeadingSize = 'lg' | 'xl';

export type DisplayHeadingProps = {
  children: ReactNode;
  /** `xl` (clamp 60–120px) for a page's main headline; `lg` (clamp 52–80px) for a section headline. */
  size?: DisplayHeadingSize;
  /** Rendered tag — defaults to `h2`. */
  as?: ElementType;
  className?: string;
};

/**
 * The site's bold, uppercase display headline treatment ("ROBIN HEIJ", "Selected
 * Clients", "Get in touch"). Wrap the accented word(s) in `<em>` — it renders in
 * the accent color, `font-style` reset to normal, matching every existing usage.
 */
export const DisplayHeading: FC<DisplayHeadingProps> = ({ children, size = 'xl', as: Tag = 'h2', className }) => (
  <Tag className={clsx(styles.heading, styles[`heading--${size}`], className)}>{children}</Tag>
);
