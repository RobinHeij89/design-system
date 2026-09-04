import { useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './menu.module.css';

export type MenuItem = { label: string; onSelect: () => void; disabled?: boolean };

export type MenuProps = {
  trigger: ReactNode;
  items: MenuItem[];
  align?: 'start' | 'end';
  className?: string;
};

export const Menu: FC<MenuProps> = ({ trigger, items, align = 'start', className }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={clsx(styles.menu, className)}>
      <button
        type="button"
        className={styles.menu__trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        {trigger}
      </button>
      {open && (
        <div role="menu" className={clsx(styles.menu__list, align === 'end' && styles['menu__list--end'])}>
          {items.map(item => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              className={styles.menu__item}
              onClick={() => {
                item.onSelect();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
