import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Drives a `--p` (0–1) CSS custom property on `ref.current` from scroll position —
 * pair it with CSS that reads `--p` (e.g. `clip-path`/`transform: scale`) for a
 * scroll-linked "unmask" effect. Reaches `1` after scrolling `range` of the
 * viewport's height (default 65%), and jumps straight to `1` under
 * `prefers-reduced-motion: reduce`.
 */
export function useScrollUnmask<T extends HTMLElement>(ref: RefObject<T | null>, range = 0.65) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '1');
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const scrollRange = window.innerHeight * range;
      const p = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, range]);
}
