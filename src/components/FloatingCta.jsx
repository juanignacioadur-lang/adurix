import { useEffect, useState } from 'react';
import { waLink } from '../content/site.js';
import { WhatsAppIcon } from './ui.jsx';

/**
 * WhatsApp shortcut that follows the visitor through the middle of the page:
 * hidden over the hero (its own CTAs are visible) and over contact + footer.
 */
export function FloatingCta({ t }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const targets = [document.getElementById('top'), document.getElementById('contact'), document.querySelector('footer')].filter(Boolean);
    const visible = new Map(targets.map((el) => [el, true]));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) visible.set(e.target, e.isIntersecting);
      setShow(![...visible.values()].some(Boolean));
    });
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={waLink(t.contact.quick(t.contact.general))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.float} (${t.a11y.newTab})`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`floating-cta group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-30 flex h-14 items-center rounded-full bg-blue text-white shadow-[0_0.75rem_2rem_-0.5rem_rgb(32_48_232/0.55)] ${
        show ? 'is-shown' : ''
      }`}
    >
      <span className="floating-cta-label t-label overflow-hidden whitespace-nowrap max-lg:hidden">{t.float}</span>
      <span className="grid size-14 flex-none place-items-center">
        <WhatsAppIcon className="size-6" />
      </span>
    </a>
  );
}
