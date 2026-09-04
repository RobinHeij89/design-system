import type { FC } from 'react';
import clsx from 'clsx';
import styles from './breadcrumbs.module.css';

export type Breadcrumb = { label: string; href?: string };

export type BreadcrumbsProps = {
  items: Breadcrumb[];
  className?: string;
};

/** The last item is treated as the current page (no link, `aria-current="page"`). */
export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, className }) => (
  <nav aria-label="Breadcrumb" className={clsx(styles.breadcrumbs, className)}>
    <ol className={styles.list}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.label}-${index}`} className={styles.item}>
            {isLast || !item.href ? (
              <span aria-current={isLast ? 'page' : undefined} className={styles.current}>
                {item.label}
              </span>
            ) : (
              <a href={item.href} className={styles.link}>{item.label}</a>
            )}
            {!isLast && <span className={styles.separator} aria-hidden="true">/</span>}
          </li>
        );
      })}
    </ol>
  </nav>
);
