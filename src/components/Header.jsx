import { useEffect, useState } from 'react';
import { LANGS, TIME_ZONE, waLink } from '../content/site.js';
import { useClock, useScrolled } from '../lib/hooks.js';
import { Logo } from './Logo.jsx';
import { Swap, WhatsAppIcon } from './ui.jsx';

function LangSwitch({ lang, setLang, label }) {
  return (
    <div role="group" aria-label={label} className="flex items-center gap-1 font-mono text-xs tracking-[0.06em]">
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true" className="text-ink/25">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
            className={`px-1 py-2 uppercase transition-colors ${lang === code ? 'font-semibold text-ink' : 'text-mute hover:text-ink'}`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header({ t, lang, setLang }) {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);
  const time = useClock(TIME_ZONE);

  const links = [
    ['work', t.nav.work],
    ['services', t.nav.services],
    ['studio', t.nav.studio],
    ['contact', t.nav.contact],
  ];

  // Mobile menu: lock scroll, close with Escape or when the layout turns desktop.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const desktop = window.matchMedia('(min-width: 64rem)');
    const onChange = () => desktop.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onChange);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onChange);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
      >
        {t.a11y.skip}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          solid ? 'border-ink/10 bg-paper' : 'border-transparent'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <a href="#top" aria-label={t.a11y.home} onClick={() => setOpen(false)} className="-m-2 p-2">
            <Logo className="h-[1.3125rem] w-auto lg:h-6" />
          </a>

          <nav aria-label={t.nav.menu} className="hidden items-center gap-9 text-[0.9375rem] font-medium lg:flex">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="link">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <LangSwitch lang={lang} setLang={setLang} label={t.a11y.lang} />
            <a href="#contact" className="btn btn-sm btn-ink max-lg:hidden">
              {t.nav.cta}
              <Swap />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="btn btn-sm btn-line min-w-[5.25rem] lg:hidden"
            >
              {open ? t.nav.close : t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-paper pt-16 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label={t.nav.menu} className={`wrap flex-1 overflow-y-auto pt-8 ${open ? 'is-in' : ''}`}>
          <ul>
            {links.map(([id, label], i) => (
              <li key={id} className="border-b border-ink/15">
                <a href={`#${id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4">
                  <span className="t-label t-num w-6 text-mute">0{i + 1}</span>
                  <span className="mask t-display text-[clamp(2.5rem,13vw,4.5rem)]" style={{ '--d': `${80 + i * 60}ms` }}>
                    <span>{label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap flex flex-col gap-5 pb-8 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-ink sm:flex-1">
              {t.nav.cta}
              <Swap />
            </a>
            <a href={waLink(t.contact.quick(t.contact.general))} target="_blank" rel="noopener noreferrer" className="btn btn-line sm:flex-1">
              <WhatsAppIcon className="size-[1.125rem]" />
              WhatsApp
            </a>
          </div>
          <p className="t-label flex justify-between text-mute">
            <span>{t.hero.place}</span>
            <span className="t-num">{time}</span>
          </p>
        </div>
      </div>
    </>
  );
}
