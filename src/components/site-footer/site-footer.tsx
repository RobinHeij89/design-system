import type { FC, ReactNode } from 'react';
import { Logo } from '../logo/logo';
import styles from './site-footer.module.css';

type SiteFooterProps = {
  /** Link target for the logo/name — usually the top of the page. */
  href: string;
  /** Site name, rendered in small caps next to/under the logo. */
  siteName: string;
  /** Copyright line (or any footer note). */
  copyright: ReactNode;
};

export const SiteFooter: FC<SiteFooterProps> = ({ href, siteName, copyright }) => (
  <footer className={styles.footer}>
    <a href={href} className={styles.logo}>
      <Logo size={40} />
      <span className={styles.name}>{siteName}</span>
    </a>
    <p className={styles.copy}>{copyright}</p>
  </footer>
);
