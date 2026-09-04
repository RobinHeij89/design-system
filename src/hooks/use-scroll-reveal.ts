import { useEffect } from 'react';

const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-bottom, .stagger';

/**
 * Adds `.visible` to `.reveal`/`.reveal-left`/`.reveal-right`/`.reveal-bottom`/`.stagger`
 * elements as they scroll into view (see `animations.css` for the transitions).
 *
 * @param immediateSelector Optional container (e.g. a hero section) whose matching
 * elements reveal immediately on mount instead of waiting to scroll into view — useful
 * for above-the-fold content that should animate in on load. Don't rely on `window.load`
 * for that: it may have already fired by the time React mounts, leaving the elements
 * stuck at opacity 0.
 */
export function useScrollReveal(immediateSelector?: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(SELECTORS);

    const revealImmediate = () => {
      if (!immediateSelector) return;
      document
        .querySelectorAll<HTMLElement>(
          SELECTORS.split(', ').map(s => `${immediateSelector} ${s}`).join(', '),
        )
        .forEach(el => el.classList.add('visible'));
    };
    const immediateRaf = requestAnimationFrame(revealImmediate);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => {
      if (!immediateSelector || !el.closest(immediateSelector)) observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(immediateRaf);
      observer.disconnect();
    };
  }, [immediateSelector]);
}
