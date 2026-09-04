import type { FC, SVGProps } from 'react';

export type SocialIconId = 'linkedin' | 'instagram' | 'github' | 'email';

export type SocialIconProps = Omit<SVGProps<SVGSVGElement>, 'id'> & {
  id: SocialIconId;
};

export const SocialIcon: FC<SocialIconProps> = ({ id, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    {id === 'linkedin' && (
      <>
        <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.2H7v11.3H3.4V9.2Z" />
        <path d="M9.1 9.2h3.4v1.5h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.18h-3.55v-5.48c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.58H9.1V9.2Z" />
      </>
    )}
    {id === 'instagram' && (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.7" r="1.2" />
      </>
    )}
    {id === 'github' && (
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.65-.2.65-.45v-1.67c-2.65.58-3.21-1.12-3.21-1.12-.43-1.1-1.05-1.39-1.05-1.39-.86-.59.07-.58.07-.58.95.07 1.45.97 1.45.97.85 1.45 2.23 1.03 2.78.79.09-.62.33-1.03.6-1.27-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.67-2.24 4.48-4.37 4.71.34.29.64.86.64 1.74v2.58c0 .25.18.54.66.45A9.5 9.5 0 0 0 12 2.5Z" />
    )}
    {id === 'email' && (
      <path d="M3.5 5.5h17v13h-17v-13Zm1.6 1.7 6.9 5.25 6.9-5.25M5.1 16.8l4.45-4.1m9.35 4.1-4.45-4.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);
