import type { FC, SVGProps } from 'react';
import clsx from 'clsx';

type IconId =
  | 'check'
  | 'info'
  | 'error'
  | 'warning'
  | 'close'
  | 'arrow-left'
  | 'arrow-right'
  | 'play'
  | 'shuffle'
  | 'external-link';

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
    {id === 'play' && <path d="M5 3.6v8.8c0 .5.55.8 1 .55l7-4.4a.65.65 0 0 0 0-1.1l-7-4.4a.65.65 0 0 0-1 .55Z" fill="currentColor" />}
    {id === 'shuffle' && (
      <>
        <path
          d="M2 4.5h2.8c1 0 1.9.55 2.35 1.42L9.4 10.6c.45.87 1.35 1.4 2.35 1.4H14M2 11.5h2.8c1 0 1.9-.55 2.35-1.42l.4-.78M14 4.5h-2.35c-1 0-1.9.55-2.35 1.42l-.4.78"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 2.3 14.2 4.5 12 6.7M12 9.3l2.2 2.2-2.2 2.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )}
    {id === 'external-link' && (
      <>
        <path
          d="M6.5 3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 3h4v4M13 3 7.5 8.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )}
  </svg>
);

export type { IconId };
