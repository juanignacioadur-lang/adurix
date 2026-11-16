import { Reveal } from './ui.jsx';

/** The isotipo with its reading: the A in front, the stroke behind it draws the X. */
function MarkDiagram({ className = '', label }) {
  return (
    <svg viewBox="0 0 360 230" className={className} role="img" aria-label={label}>
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.75" strokeDasharray="2 3">
        <line x1="0" y1="40" x2="360" y2="40" />
        <line x1="0" y1="190" x2="360" y2="190" />
      </g>
      <g transform="translate(85.5 40) scale(1.5)">
        <polygon fill="var(--color-blue)" points="52,100 74,100 86.5,75.96 75.5,54.81" />
        <polygon fill="var(--color-blue)" points="104,0 126,0 102.5,45.19 91.5,24.04" />
        <polygon fill="currentColor" points="0,100 52,0 74,0 126,100 104,100 63,21.15 22,100" />
      </g>
      <g stroke="currentColor" strokeWidth="0.75">
        <line x1="42" y1="115" x2="118" y2="115" />
        <line x1="244" y1="115" x2="318" y2="115" />
      </g>
      <g fill="currentColor">
        <circle cx="118" cy="115" r="1.75" />
        <circle cx="244" cy="115" r="1.75" />
        <text x="30" y="119.5" textAnchor="middle" className="font-mono text-[11px]">
          A
        </text>
        <text x="330" y="119.5" textAnchor="middle" className="font-mono text-[11px]">
          X
        </text>
      </g>
    </svg>
  );
}

export function Studio({ t }) {
  const s = t.studio;

  return (
    <section id="studio" className="wrap py-24 lg:py-40">
      {/* Statement */}
      <div className="grid gap-x-6 gap-y-5 lg:grid-cols-12">
        <h2 className="t-label text-mute lg:col-span-3 lg:pt-3">{s.label}</h2>
        <Reveal as="p" className="text-[clamp(1.75rem,4vw,3.625rem)] font-[560] leading-[1.06] tracking-[-0.035em] [font-stretch:108%] lg:col-span-9">
          {s.statement[0]} <span className="text-ink/50">{s.statement[1]}</span>
        </Reveal>
      </div>

      {/* From A to X */}
      <div className="mt-20 grid items-center gap-x-6 gap-y-8 border-t border-ink/15 pt-6 lg:mt-32 lg:grid-cols-12">
        <p className="t-label self-start text-mute lg:col-span-3">{s.az.title}</p>
        <Reveal className="lg:col-span-4">
          <MarkDiagram className="w-full max-w-[26rem]" label={`ADURIX — ${s.az.title}`} />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
          <p className="text-[1.3125rem] leading-[1.32] tracking-[-0.01em] lg:text-2xl lg:leading-[1.3]">{s.az.text}</p>
          <p className="t-label mt-5 text-mute">* {s.az.note}</p>
        </Reveal>
      </div>

      {/* Figures */}
      <dl className="mt-20 grid grid-cols-2 border-t border-ink/15 lg:mt-32 lg:grid-cols-4">
        {s.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 70}
            className={`flex flex-col-reverse justify-end border-b border-ink/15 py-7 lg:border-b-0 lg:py-9 ${
              i % 2 ? 'pl-5 max-lg:border-l max-lg:border-ink/15' : 'pr-5'
            } ${i > 0 ? 'lg:border-l lg:border-ink/15 lg:pl-6' : ''}`}
          >
            <dt className="t-label mt-4 text-mute">{stat.label}</dt>
            <dd className="t-num text-[clamp(2.75rem,6.4vw,6rem)] font-[680] leading-[0.9] tracking-[-0.045em] [font-stretch:82%]">
              {stat.value}
            </dd>
          </Reveal>
        ))}
      </dl>

      {/* Process */}
      <div className="mt-20 lg:mt-32">
        <h3 className="t-label text-mute">{s.process.title}</h3>
        <ol className="mt-6 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {s.process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.t}
              delay={i * 80}
              className={`border-b border-ink/15 py-7 lg:border-b-0 lg:py-8 lg:pr-8 ${i > 0 ? 'lg:border-l lg:border-ink/15 lg:pl-6' : ''} ${
                i % 2 ? 'sm:max-lg:border-l sm:max-lg:border-ink/15 sm:max-lg:pl-6' : 'sm:max-lg:pr-6'
              }`}
            >
              <span className="t-label t-num text-blue">0{i + 1}</span>
              <h4 className="t-title mt-8 text-[1.75rem] lg:mt-20 lg:text-[2rem]">{step.t}</h4>
              <p className="mt-3 max-w-sm leading-[1.45] text-mute">{step.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Track record */}
      <div className="mt-20 lg:mt-32">
        <h3 className="t-label text-mute">{s.journey.title}</h3>
        <ul className="mt-6 border-b border-ink/15">
          {s.journey.items.map((item, i) => (
            <Reveal as="li" key={item.period} delay={i * 70} className="grid gap-x-6 gap-y-2 border-t border-ink/15 py-7 lg:grid-cols-12 lg:py-8">
              <span className="t-label t-num text-mute lg:col-span-3 lg:pt-1.5">{item.period}</span>
              <h4 className="t-title text-[1.375rem] lg:col-span-4 lg:text-2xl">{item.title}</h4>
              <p className="max-w-xl leading-[1.45] text-mute lg:col-span-5">{item.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
