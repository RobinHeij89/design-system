import type { FC } from 'react';
import clsx from 'clsx';
import styles from './pagination.module.css';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const PAGE_WINDOW = 1;

function getPageList(current: number, total: number): (number | 'ellipsis')[] {
  const pages = new Set<number>([1, total, current]);
  for (let i = 1; i <= PAGE_WINDOW; i++) {
    if (current - i >= 1) pages.add(current - i);
    if (current + i <= total) pages.add(current + i);
  }
  const sorted = [...pages].sort((a, b) => a - b);
  const result: (number | 'ellipsis')[] = [];
  sorted.forEach((page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) result.push('ellipsis');
    result.push(page);
  });
  return result;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className }) => {
  const pages = getPageList(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className={clsx(styles.pagination, className)}>
      <button
        type="button"
        className={styles.pagination__arrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        ←
      </button>
      {pages.map((page, i) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${i}`} className={styles.pagination__ellipsis}>…</span>
        ) : (
          <button
            key={page}
            type="button"
            className={clsx(styles.pagination__page, page === currentPage && styles['pagination__page--active'])}
            aria-current={page === currentPage ? 'page' : undefined}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ),
      )}
      <button
        type="button"
        className={styles.pagination__arrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  );
};
