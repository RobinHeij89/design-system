import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './social-links.module.css';

export type SocialLink = {
  /** URL for the link — `http(s)` links open in a new tab automatically. */
  href: string;
  /** Accessible label for screen readers. */
  ariaLabel: string;
  /** SVG icon element. */
  icon: ReactNode;
};

type SocialLinksProps = {
  links: SocialLink[];
  /** Additional CSS classes on the wrapper. */
  className?: string;
};

/**
 * Minimal, borderless icon row. Color is inherited from the parent so it
 * adapts to whatever background it sits on.
 */
export const SocialLinks: FC<SocialLinksProps> = ({ links, className }) => (
  <div className={clsx(styles.socialLinks, className)}>
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={styles.link}
        aria-label={link.ariaLabel}
      >
        {link.icon}
      </a>
    ))}
  </div>
);
