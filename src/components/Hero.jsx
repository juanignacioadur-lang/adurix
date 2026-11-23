import { HERO_PHONES, PROJECTS, TIME_ZONE } from '../content/site.js';
import { useClock, useMounted } from '../lib/hooks.js';
import { Phone } from './Devices.jsx';
import { Mark } from './Logo.jsx';
import { withDot } from '../lib/typography.jsx';
import { ArrowDown, Lines, Swap } from './ui.jsx';

// Measured width of the headline per language, in em. `base` fits the longest line to the
// viewport; `xl` also keeps the second line clear of the intro that sits beside it.
const FIT = {
  es: { '--fit-base': 7.62, '--fit-xl': 9.4 },
  en: { '--fit-base': 8.7, '--fit-xl': 8.75 },
};
// One entry per phone on the stage: scroll speed, entrance delay and vertical offset.
const PHONES = [
  { pan: { '--pan': '54s', '--pan-delay': '1.4s' }, delay: 140, offset: 'mt-12 md:mt-16' },
  { pan: { '--pan': '46s', '--pan-delay': '0.6s' }, delay: 0, offset: '' },
  { pan: { '--pan': '50s', '--pan-delay': '2.2s' }, delay: 220, offset: 'mt-12 md:mt-9' },
  { pan: { '--pan': '58s', '--pan-delay': '1s' }, delay: 320, offset: 'md:mt-24 max-md:hidden' },
];

export function Hero({ t, lang }) {
  const mounted = useMounted();
  const time = useClock(TIME_ZONE);
  const cases = Object.fromEntries(t.work.cases.map((c, i) => [c.id, { ...c, n: i + 1 }]));
  const on = mounted ? 'is-in' : '';

  return (
    <section id="top" className="relative">
      <div className="wrap pt-24 sm:pt-28 lg:pt-32">
        <div className={`reveal ${on} t-label flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-mute`}>
          <span>{t.hero.kicker}</span>
          <span className="max-md:hidden">
            {t.hero.place} <span aria-hidden="true">·</span> <span className="t-num">{time}</span>
          </span>
          <span className="flex items-center gap-2.5 text-ink">
            <span className="live-dot text-blue" aria-hidden="true" />
            {t.hero.status}
          </span>
        </div>

        <div className="relative mt-7 lg:mt-9">
          <Lines
            as="h1"
            lines={t.hero.title.map((line) => withDot(line))}
            shown={mounted}
            delay={100}
            stagger={110}
            className="hero-title t-display"
            style={FIT[lang]}
          />
          <div
            className={`reveal ${on} mt-8 max-w-xl xl:absolute xl:bottom-3 xl:right-0 xl:mt-0 xl:w-[34%] xl:max-w-[29rem]`}
            style={{ '--d': '480ms' }}
          >
            <p className="text-lg leading-[1.4] text-ink/80 sm:text-[1.1875rem]">{t.hero.lede}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-ink">
                {t.hero.ctaPrimary}
                <Swap />
              </a>
              <a href="#work" className="btn btn-line">
                {t.hero.ctaSecondary}
                <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stage: the live products, scrolling on their own. */}
      <div className="on-blue relative mt-14 overflow-hidden bg-blue text-white lg:mt-20">
        <Mark className="pointer-events-none absolute -right-[4%] top-[8%] h-[135%] text-white/[0.06] [--logo-accent:rgb(255_255_255/0.06)] max-md:hidden" />
        <div className="wrap relative">
          <div className={`reveal ${on} t-label flex items-center justify-between gap-6 pt-5 text-white/85`} style={{ '--d': '560ms' }}>
            <span>{t.hero.stageNote}</span>
            <a href="#work" className="link flex items-center gap-2 text-white max-sm:hidden">
              {t.hero.stageHint}
              <ArrowDown className="size-3.5" />
            </a>
          </div>

          <div className="flex h-[clamp(23rem,43vw,36rem)] items-start justify-center gap-[1.125rem] pt-9 md:gap-[clamp(1rem,3.6vw,4.5rem)] lg:pt-11">
            {HERO_PHONES.map((id, i) => {
              const c = cases[id];
              const p = PHONES[i];
              return (
                <a
                  key={id}
                  href={`#case-${id}`}
                  aria-label={`${c.name} — ${c.kind}`}
                  className={`reveal ${on} block flex-none ${p.offset}`}
                  style={{ '--d': `${560 + p.delay}ms` }}
                >
                  {/* w-0 + min-w-full: the label takes the phone's width instead of widening the column. */}
                  <p className="t-label mb-3 flex w-0 min-w-full items-center justify-between gap-3 text-white/85 max-md:hidden">
                    <span className="truncate">
                      <span className="t-num text-white/70">0{c.n}</span> {c.name}
                    </span>
                    {PROJECTS[id].isNew ? (
                      <span className="flex-none rounded-full bg-white px-2 py-0.5 text-[0.625rem] text-blue">{t.work.newLabel}</span>
                    ) : (
                      <ArrowDown className="size-3 flex-none" />
                    )}
                  </p>
                  <Phone shot={PROJECTS[id].shots.phoneScroll} pan eager={i === 1} className="hero-phone" style={p.pan} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
