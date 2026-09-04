import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Icon } from '../icons/icons';
import styles from './modal.module.css';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export const Modal: FC<ModalProps> = ({ open, onClose, title, children, className }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={styles.overlay} onMouseDown={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rh-ds-modal-title"
        tabIndex={-1}
        className={clsx(styles.dialog, className)}
        onMouseDown={e => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="rh-ds-modal-title" className={styles.title}>{title}</h2>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <Icon id="close" />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
