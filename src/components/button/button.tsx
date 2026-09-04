import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Primary/secondary/tertiary interactive trigger. Renders an `<a>` when `href` is given. */
export const Button: FC<ButtonProps> = ({ variant = 'primary', size = 'md', className, children, ...rest }) => {
  const classes = clsx(styles.button, styles[`button--${variant}`], styles[`button--${size}`], className);

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
};
