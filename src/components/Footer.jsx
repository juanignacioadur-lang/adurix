import { PROJECTS, TIME_ZONE, WHATSAPP_DISPLAY, waLink } from '../content/site.js';
import { useClock } from '../lib/hooks.js';
import { Logo } from './Logo.jsx';
import { ArrowUpRight, Reveal, Swap } from './ui.jsx';

const YEAR = new Date().getFullYear();

export function Footer({ t }) {
  const f = t.footer;
  const time = useClock(TIME_ZONE);

  const links = [
    ['work', t.nav.work],
    ['services', t.nav.services],
    ['studio', t.nav.studio],
    ['faq', t.faq.label],
    ['contact', t.nav.contact],
  ];

  return (
    <footer className="on-dark bg-ink pb-8 pt-16 text-paper [--logo-accent:var(--color-blue-bright)] lg:pt-24">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-5">
            <p className="t-title max-w-md text-[clamp(1.625rem,2.7vw,2.375rem)]">{f.tagline}</p>
            <a href="#contact" className="btn btn-white mt-8">
              {t.nav.cta}
              <Swap />
            </a>
          </div>

          <nav aria-label={f.sitemap} className="lg:col-span-2 lg:col-start-7">
            <h2 className="t-label text-paper/60">{f.sitemap}</h2>
            <ul className="mt-5 space-y-2.5">
              {links.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="t-label text-paper/60">{f.live}</h2>
            <ul className="mt-5 space-y-2.5">
              {t.work.cases.map((c) => (
                <li key={c.id}>
                  <a href={PROJECTS[c.id].url} target="_blank" rel="noopener noreferrer" className="link">
                    {c.name}
                    <ArrowUpRight className="ml-1.5 inline size-3.5 align-[-0.1em] text-paper/50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h2 className="t-label text-paper/60">{f.talk}</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a href={waLink(t.contact.quick(t.contact.general))} target="_blank" rel="noopener noreferrer" className="link t-num whitespace-nowrap">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="text-paper/60">{t.hero.place}</li>
              <li className="text-paper/60">
                {f.time} <span className="t-num text-paper">{time}</span>
              </li>
            </ul>
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <Logo className="h-auto w-full" title="ADURIX" />
        </Reveal>

        <div className="t-label mt-10 flex flex-col gap-3 border-t border-paper/15 pt-6 text-paper/60 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <span>
            © {YEAR} ADURIX · Creative Dev Studio. {f.rights}
          </span>
          <span className="lg:text-center">{f.colophon}</span>
          <a href="#top" className="link self-start text-paper lg:self-auto">
            {f.top} ↑
          </a>
        </div>
        <p className="t-label mt-3 text-paper/55">{f.made}</p>
      </div>
    </footer>
  );
}
