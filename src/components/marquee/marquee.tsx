import type { FC } from 'react';
import clsx from 'clsx';
import styles from './marquee.module.css';

type MarqueeProps = {
  /** Text repeated end-to-end along the track. */
  text: string;
  /** How many times `text` repeats per lap — enough to fill the widest expected viewport. */
  repeat?: number;
  /** Seconds for one full loop. */
  speed?: number;
  /** Accessible label for the whole banner. */
  ariaLabel?: string;
  /** Extra class on the outer wrapper — use it to set position, background, and color. */
  className?: string;
};

export const Marquee: FC<MarqueeProps> = ({ text, repeat = 6, speed = 32, ariaLabel, className }) => {
  const content = text.repeat(repeat);
  return (
    <div className={clsx(styles.marquee, className)} aria-label={ariaLabel}>
      <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
        <span className={styles.content}>{content}</span>
        <span className={styles.content} aria-hidden="true">{content}</span>
      </div>
    </div>
  );
};
