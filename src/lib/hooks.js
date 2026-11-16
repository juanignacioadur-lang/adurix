import { useEffect, useRef, useState } from 'react';

/** True once the element has entered the viewport (fires once). */
export function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0.08 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, rootMargin, threshold]);

  return [ref, inView];
}

/** True when the page has been scrolled past `threshold` px. */
export function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

const formatClock = (timeZone) =>
  new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(new Date());

/** Live HH:MM clock for a time zone (the studio's local time). */
export function useClock(timeZone) {
  const [time, setTime] = useState(() => formatClock(timeZone));
  useEffect(() => {
    const id = setInterval(() => setTime(formatClock(timeZone)), 15000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

/** Flips to true on the frame after mount — used to start entrance transitions. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    let inner;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setMounted(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, []);
  return mounted;
}
