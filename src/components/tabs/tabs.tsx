import { useRef } from 'react';
import type { FC, KeyboardEvent, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './tabs.module.css';

export type Tab = { id: string; label: string; content: ReactNode; disabled?: boolean };

export type TabsProps = {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export const Tabs: FC<TabsProps> = ({ tabs, activeId, onChange, className }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const focusTabAt = (index: number) => {
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    if (!buttons?.length) return;
    const next = buttons[(index + buttons.length) % buttons.length];
    next.focus();
    if (!next.disabled) onChange(next.dataset.tabId!);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const enabled = tabs.filter(t => !t.disabled);
    const currentIndex = tabs.findIndex(t => t.id === activeId);
    if (e.key === 'ArrowRight') { e.preventDefault(); focusTabAt(currentIndex + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); focusTabAt(currentIndex - 1); }
    else if (e.key === 'Home') { e.preventDefault(); focusTabAt(tabs.indexOf(enabled[0])); }
    else if (e.key === 'End') { e.preventDefault(); focusTabAt(tabs.indexOf(enabled[enabled.length - 1])); }
  };

  const active = tabs.find(t => t.id === activeId);

  return (
    <div className={clsx(styles.tabs, className)}>
      <div ref={listRef} role="tablist" className={styles.tabs__list} onKeyDown={onKeyDown}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            data-tab-id={tab.id}
            id={`tab-${tab.id}`}
            aria-selected={tab.id === activeId}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={tab.id === activeId ? 0 : -1}
            disabled={tab.disabled}
            className={clsx(styles.tabs__tab, tab.id === activeId && styles['tabs__tab--active'])}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {active && (
        <div role="tabpanel" id={`tabpanel-${active.id}`} aria-labelledby={`tab-${active.id}`} className={styles.tabs__panel}>
          {active.content}
        </div>
      )}
    </div>
  );
};
