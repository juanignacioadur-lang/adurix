import { useRef, useState } from 'react';
import { WHATSAPP_DISPLAY, waLink } from '../content/site.js';
import { Mark } from './Logo.jsx';
import { Lines, Reveal, Swap, WhatsAppIcon } from './ui.jsx';

/**
 * The brief is written as a sentence: what the visitor fills in is the WhatsApp
 * message we receive.
 */
export function Contact({ t }) {
  const c = t.contact;
  const [type, setType] = useState(0);
  const [brand, setBrand] = useState('');
  const [details, setDetails] = useState('');
  const chips = useRef([]);

  const message = c.message({ type: c.types[type].full, brand: brand.trim(), details: details.trim() });

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  // Radio group keyboard support: arrows move the selection.
  const onChipKey = (e, i) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (i + step + c.types.length) % c.types.length;
    setType(next);
    chips.current[next]?.focus();
  };

  const sentence = 'text-[clamp(1.625rem,3.7vw,3.25rem)] font-[600] tracking-[-0.03em] [font-stretch:108%]';

  return (
    <section id="contact" className="on-blue relative overflow-hidden bg-blue py-24 text-white lg:py-40">
      <Mark className="pointer-events-none absolute -bottom-[12%] -right-[8%] h-[70%] text-white/[0.06] [--logo-accent:rgb(255_255_255/0.06)] max-lg:hidden" />

      <div className="wrap relative">
        <div className="grid gap-x-6 gap-y-5 lg:grid-cols-12">
          <p className="t-label text-white/70 lg:col-span-3 lg:pt-4">{c.label}</p>
          <div className="lg:col-span-9">
            <Lines as="h2" lines={c.title} className="t-display text-[clamp(3rem,9.6vw,9.25rem)]" />
            <Reveal as="p" className="mt-8 max-w-lg text-lg leading-[1.4] text-white/85">
              {c.intro}
            </Reveal>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-16 grid gap-x-6 border-t border-white/25 pt-10 lg:mt-24 lg:grid-cols-12 lg:pt-14">
          <Reveal className="lg:col-span-9 lg:col-start-4">
            <div className={`${sentence} flex flex-wrap items-baseline gap-x-[0.4em] gap-y-3 leading-[1.2]`}>
              <label htmlFor="brief-brand">{c.hi}</label>
              <input
                id="brief-brand"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder={c.brandPh}
                aria-label={c.brandLabel}
                autoComplete="organization"
                maxLength={80}
                className="brief-input min-w-[9ch] flex-1 basis-[12ch]"
              />
            </div>

            <div
              role="radiogroup"
              aria-label={c.typeLabel}
              className={`${sentence} mt-5 flex flex-wrap items-center gap-x-[0.35em] gap-y-[0.35em] leading-[1.2] lg:mt-6`}
            >
              <span className="mr-[0.1em]">{c.need}</span>
              {c.types.map((option, i) => (
                <button
                  key={option.full}
                  ref={(el) => {
                    chips.current[i] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={type === i}
                  tabIndex={type === i ? 0 : -1}
                  onClick={() => setType(i)}
                  onKeyDown={(e) => onChipKey(e, i)}
                  className="chip"
                >
                  {option.short}
                </button>
              ))}
            </div>

            <div className="mt-12 lg:mt-14">
              <label htmlFor="brief-details" className="t-label text-white/75">
                {c.detailsLabel} <span className="text-white/70">({c.optional})</span>
              </label>
              <textarea
                id="brief-details"
                rows={2}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={c.detailsPh}
                maxLength={600}
                className="brief-input mt-4 block w-full resize-none text-xl leading-[1.4] lg:text-2xl"
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
              <button type="submit" className="btn btn-white h-16 gap-3 px-8 text-base">
                <WhatsAppIcon className="size-5" />
                {c.submit}
                <Swap />
              </button>
              <p className="text-white/80">
                {c.direct}:{' '}
                <a
                  href={waLink(c.quick(c.general))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-on t-num whitespace-nowrap font-semibold text-white"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
            </div>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
