import clsx from 'clsx';
import { useMemo, useState, type ReactNode } from 'react';
import styles from './data-table.module.css';

export type Column<T> = {
  id: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  /** Value used for sorting; omit to make the column unsortable. */
  sortValue?: (row: T) => string | number;
  align?: 'start' | 'end';
  /** Monospaced, tabular figures — for amounts. */
  numeric?: boolean;
};

export type DataTableProps<T> = {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string | number;
  onRowClick?: (row: T) => void;
  /** Rendered instead of the table when there are no rows. */
  empty?: ReactNode;
  footer?: ReactNode;
  caption?: string;
  className?: string;
};

type Sort = { id: string; dir: 'asc' | 'desc' } | null;

/** Tabular data with optional client-side column sorting, numeric (tabular-figure) columns, clickable rows, an empty state and a footer row. */
export function DataTable<T>({ columns, rows, rowKey, onRowClick, empty, footer, caption, className }: DataTableProps<T>) {
  const [sort, setSort] = useState<Sort>(null);

  const sorted = useMemo(() => {
    const col = sort && columns.find((c) => c.id === sort.id);
    if (!col?.sortValue) return rows;
    const get = col.sortValue;
    const dir = sort?.dir === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => {
      const va = get(a);
      const vb = get(b);
      return (va < vb ? -1 : va > vb ? 1 : 0) * dir;
    });
  }, [rows, columns, sort]);

  if (rows.length === 0 && empty) return <>{empty}</>;

  const toggle = (id: string) =>
    setSort((s) => (s?.id !== id ? { id, dir: 'asc' } : s.dir === 'asc' ? { id, dir: 'desc' } : null));

  return (
    <div className={clsx(styles.dataTable, className)}>
      <table className={styles.table}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c) => {
              const active = sort?.id === c.id;
              return (
                <th
                  key={c.id}
                  scope="col"
                  className={clsx(c.align === 'end' && styles.end)}
                  aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                >
                  {c.sortValue ? (
                    <button type="button" className={styles.sort} onClick={() => toggle(c.id)}>
                      {c.header}
                      <span className={clsx(styles.indicator, active && styles.active)} aria-hidden>
                        {active && sort.dir === 'desc' ? '↓' : '↑'}
                      </span>
                    </button>
                  ) : (
                    c.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr
              key={rowKey(row)}
              className={clsx(onRowClick && styles.clickable)}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              tabIndex={onRowClick ? 0 : undefined}
              onKeyDown={onRowClick ? (e) => e.key === 'Enter' && onRowClick(row) : undefined}
            >
              {columns.map((c) => (
                <td key={c.id} className={clsx(c.align === 'end' && styles.end, c.numeric && styles.numeric)}>
                  {c.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && <tfoot>{footer}</tfoot>}
      </table>
    </div>
  );
}
