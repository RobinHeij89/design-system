import type { FC, ReactNode } from 'react';
import styles from './site-footer.module.css';

type SiteFooterProps = {
  /** Logo image src, shown above the site name. */
  logoSrc: string;
  /** Alt text for the logo. */
  logoAlt?: string;
  /** Link target for the logo/name — usually the top of the page. */
  href: string;
  /** Site name, rendered in small caps next to/under the logo. */
  siteName: string;
  /** Copyright line (or any footer note). */
  copyright: ReactNode;
};

export const SiteFooter: FC<SiteFooterProps> = ({ logoSrc, logoAlt = '', href, siteName, copyright }) => (
  <footer className={styles.footer}>
    <a href={href} className={styles.footer__logo}>
      <img src={logoSrc} alt={logoAlt} className={styles.footer__mark} />
      <span className={styles.footer__name}>{siteName}</span>
    </a>
    <p className={styles.footer__copy}>{copyright}</p>
  </footer>
);
