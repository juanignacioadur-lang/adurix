import { useState } from 'react';
import { withDot } from '../lib/typography.jsx';
import { Lines, Reveal } from './ui.jsx';

export function Faq({ t }) {
  const f = t.faq;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="wrap pb-24 lg:pb-40">
      <div className="grid gap-x-6 gap-y-5 border-t border-ink/15 pt-6 lg:grid-cols-12">
        <h2 className="t-label text-mute lg:col-span-3">{f.label}</h2>
        <div className="lg:col-span-9">
          <Lines as="p" lines={[withDot(f.title)]} className="t-display text-[clamp(2.25rem,5.4vw,5rem)]" />

          <Reveal className="mt-12 border-b border-ink/15 lg:mt-16">
            {f.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-t border-ink/15">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full items-center justify-between gap-6 py-5 text-left lg:py-6"
                    >
                      <span className="text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] transition-colors duration-300 group-hover:text-blue lg:text-[1.5rem]">
                        {item.q}
                      </span>
                      <span className="acc-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="acc-panel" data-open={isOpen} inert={!isOpen}>
                    <div>
                      <p className="acc-inner max-w-2xl pb-7 text-lg leading-[1.45] text-mute">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
