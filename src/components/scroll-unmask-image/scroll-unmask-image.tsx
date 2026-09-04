import { useRef } from 'react';
import type { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useScrollUnmask } from '../../hooks/use-scroll-unmask';
import styles from './scroll-unmask-image.module.css';

export type ScrollUnmaskImageProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  /** How far (as a fraction of the viewport height) into the scroll the image finishes unmasking. Defaults to 0.65. */
  range?: number;
};

/**
 * Image that starts slightly masked and scaled down, then opens up to its full
 * size as the page scrolls (Hero's photo). Respects `prefers-reduced-motion`.
 *
 * The outer frame owns the corner shape (squircle where supported) and clips
 * to it; the inner element carries the scroll-driven mask/scale animation.
 */
export const ScrollUnmaskImage: FC<ScrollUnmaskImageProps> = ({ src, alt, range, className, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollUnmask(ref, range);

  return (
    <div className={clsx(styles.frame, className)} {...rest}>
      <div ref={ref} className={styles.unmask}>
        <img src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  );
};
