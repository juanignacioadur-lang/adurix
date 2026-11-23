import { useState } from 'react';
import { waLink } from '../content/site.js';
import { withDot } from '../lib/typography.jsx';
import { Lines, Reveal, Swap } from './ui.jsx';

export function Services({ t }) {
  const s = t.services;
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="on-dark mt-16 bg-ink py-24 text-paper lg:mt-24 lg:py-40">
      <div className="wrap">
        <div className="grid gap-x-6 gap-y-5 lg:grid-cols-12">
          <p className="t-label text-paper/60 lg:col-span-3 lg:pt-3">
            {s.label} <span className="t-num">(0{s.items.length})</span>
          </p>
          <div className="lg:col-span-9">
            <Lines as="h2" lines={[withDot(s.title, 'text-blue-bright')]} className="t-display text-[clamp(2.5rem,6.6vw,6.25rem)]" />
            <Reveal as="p" className="mt-7 max-w-xl text-lg leading-[1.4] text-paper/65">
              {s.intro}
            </Reveal>
          </div>
        </div>

        <div className="mt-16 border-b border-paper/15 lg:mt-24">
          {s.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.title} className="border-t border-paper/15">
                <h3>
                  <button
                    type="button"
                    id={`service-tab-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group grid w-full grid-cols-12 items-baseline gap-x-6 py-7 text-left lg:py-9"
                  >
                    <span className="t-label t-num col-span-2 text-paper/60 lg:col-span-1">0{i + 1}</span>
                    <span
                      className={`t-title col-span-9 text-[clamp(1.5rem,3.3vw,2.875rem)] transition-[color,transform] duration-500 ease-expo lg:col-span-7 lg:group-hover:translate-x-2 ${
                        isOpen ? 'text-paper' : 'text-paper/55 group-hover:text-paper'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="t-label col-span-3 text-blue-bright max-lg:hidden">{item.tag}</span>
                    <span className="acc-icon col-span-1 self-center justify-self-end" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`service-panel-${i}`}
                  role="region"
                  aria-labelledby={`service-tab-${i}`}
                  className="acc-panel"
                  data-open={isOpen}
                  inert={!isOpen}
                >
                  <div>
                    <div className="acc-inner grid grid-cols-12 gap-x-6 gap-y-8 pb-12 lg:pb-16">
                      <div className="col-span-12 lg:col-span-5 lg:col-start-2">
                        <p className="t-label mb-5 text-blue-bright lg:hidden">{item.tag}</p>
                        <p className="max-w-lg text-lg leading-[1.45] text-paper/75">{item.desc}</p>
                        <a
                          href={waLink(t.contact.quick(item.title))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost-light mt-8"
                        >
                          {s.cta}
                          <Swap />
                        </a>
                      </div>
                      <ul className="col-span-12 lg:col-span-5 lg:col-start-8">
                        {item.features.map((f) => (
                          <li key={f} className="flex gap-4 border-b border-paper/12 py-3 leading-snug first:border-t">
                            <span aria-hidden="true" className="mt-[0.55em] size-1.5 flex-none bg-blue-bright" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
