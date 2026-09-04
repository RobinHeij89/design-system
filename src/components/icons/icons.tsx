import type { FC, SVGProps } from 'react';
import clsx from 'clsx';

type IconId = 'check' | 'info' | 'error' | 'warning' | 'close' | 'arrow-left' | 'arrow-right';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'id'> & {
  id: IconId;
};

export const Icon: FC<IconProps> = ({ id, className, ...rest }) => (
  <svg viewBox="0 0 16 16" fill="none" className={clsx(className)} aria-hidden="true" {...rest}>
    {id === 'check' && (
      <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    )}
    {id === 'info' && (
      <>
        <circle cx="8" cy="4.5" r="0.75" fill="currentColor" />
        <path d="M8 7v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </>
    )}
    {(id === 'error' || id === 'warning') && (
      <>
        <path d="M8 3.5v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="8" cy="11.75" r="0.75" fill="currentColor" />
      </>
    )}
    {id === 'close' && (
      <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    )}
    {id === 'arrow-left' && (
      <path d="M13 8H3m0 0 4-4m-4 4 4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    )}
    {id === 'arrow-right' && (
      <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

export type { IconId };
