import { useEffect, useRef } from 'react';

interface UseSwipeProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  minSwipeDistance?: number;
}

/** Devuelve true si el toque empezó dentro de un elemento con scroll propio. */
function startsInScrollable(target: EventTarget | null): boolean {
  let el = target as HTMLElement | null;
  while (el && el !== document.body) {
    const style = window.getComputedStyle(el);
    const scrollY = /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight;
    const scrollX = /(auto|scroll)/.test(style.overflowX) && el.scrollWidth > el.clientWidth;
    if (scrollX || (scrollY && el.tagName !== 'SECTION')) return true;
    el = el.parentElement;
  }
  return false;
}

export function useSwipe({ onSwipeLeft, onSwipeRight, minSwipeDistance = 60 }: UseSwipeProps) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const end = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      end.current = null;
      start.current = startsInScrollable(e.target)
        ? null
        : { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      end.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      if (!start.current || !end.current) return;
      const dx = start.current.x - end.current.x;
      const dy = start.current.y - end.current.y;
      // Solo gestos claramente horizontales para no interferir con el scroll vertical
      if (Math.abs(dx) < minSwipeDistance || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (dx > 0) onSwipeLeft();
      else onSwipeRight();
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, minSwipeDistance]);
}
