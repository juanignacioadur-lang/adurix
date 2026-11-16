import { PROJECTS, waLink } from '../content/site.js';
import { Browser, Phone } from './Devices.jsx';
import { ArrowUpRight, Lines, Reveal, Swap } from './ui.jsx';

function CaseStudy({ c, index, t }) {
  const project = PROJECTS[c.id];
  const w = t.work;
  // Scroll speed stays constant regardless of how tall each capture is.
  const scrollDur = `${Math.round(5 / project.scrollRatio)}s`;

  return (
    <article id={`case-${c.id}`} className="border-t border-ink/15 pb-24 pt-5 lg:pb-36 lg:pt-6">
      <header className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2">
        <span className="t-label t-num col-span-12 text-mute lg:col-span-1">0{index + 1}</span>
        <h3 className="t-title col-span-12 text-[clamp(1.875rem,3.8vw,3.375rem)] lg:col-span-6">{c.name}</h3>
        <p className="t-label col-span-12 text-mute lg:col-span-5 lg:text-right">
          {c.sector} <span aria-hidden="true">—</span> {c.kind}
        </p>
      </header>

      <Reveal className="mt-7 lg:mt-9">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${w.visit}: ${c.name} (${t.a11y.newTab})`}
          className="case-stage group relative block overflow-hidden"
          style={{ background: project.stage, color: project.stageInk, '--scroll-dur': scrollDur }}
        >
          <div className="relative mx-auto w-[88%] pb-[11%] pt-[7%] sm:w-[82%] lg:w-[72%] lg:pb-[6.5%] lg:pt-[5.5%]">
            <Browser project={project} alt={`${c.name} — ${c.kind}`} openLabel={w.open} />
            <Phone
              shot={project.shots.phone}
              className="absolute -right-[4%] bottom-[4%] sm:-right-[7%] lg:-right-[11%] lg:bottom-[9%]"
              style={{ '--pw': 'clamp(5.75rem, 15.5vw, 14.5rem)' }}
            />
          </div>
          <span className="t-label pointer-events-none absolute bottom-5 left-6 flex items-center gap-2.5 opacity-90 transition-opacity duration-500 group-hover:opacity-0 max-lg:hidden [@media(hover:none)]:hidden">
            <span className="inline-block h-px w-6 bg-current" />
            {w.hover}
          </span>
        </a>
      </Reveal>

      <div className="mt-9 grid gap-x-6 gap-y-10 lg:mt-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[1.3125rem] leading-[1.32] tracking-[-0.01em] lg:text-2xl lg:leading-[1.3]">{c.summary}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8">
            {w.visit}
            <Swap />
          </a>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-4 lg:col-start-7">
          <h4 className="t-label text-mute">{w.built}</h4>
          <ul className="mt-4">
            {c.built.map((item) => (
              <li key={item} className="border-b border-ink/12 py-2.5 leading-snug first:border-t">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="lg:col-span-2 lg:col-start-11">
          <h4 className="t-label text-mute">{w.stack}</h4>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.8125rem] leading-relaxed text-ink/80 lg:block">
            {c.stack.map((item) => (
              <li key={item} className="lg:py-1">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal as="figure" className="mt-14 grid gap-x-6 gap-y-5 border-t border-ink/15 pt-6 lg:mt-20 lg:grid-cols-12">
        <figcaption className="t-label text-mute lg:col-span-4">
          <span className="block text-ink">{c.quote.who}</span>
          <span className="mt-1 block">{c.quote.org}</span>
        </figcaption>
        <blockquote className="relative text-[1.4375rem] font-medium leading-[1.24] tracking-[-0.02em] lg:col-span-8 lg:text-[2.125rem] lg:leading-[1.18]">
          <span aria-hidden="true" className="absolute -left-[0.5em] top-0 text-blue max-lg:hidden">
            “
          </span>
          <span className="lg:hidden" aria-hidden="true">
            “
          </span>
          {c.quote.text}
          <span aria-hidden="true">”</span>
        </blockquote>
      </Reveal>
    </article>
  );
}

function MoreWork({ t }) {
  const { more } = t.work;
  return (
    <div className="border-t border-ink/15 pb-8 pt-5 lg:pt-6">
      <h3 className="t-label text-mute">{more.title}</h3>
      <ul className="mt-8 lg:mt-12">
        {more.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 70} className="border-t border-ink/15 last:border-b">
            <a
              href={waLink(t.contact.quick(item.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${more.ask}: ${item.name} (WhatsApp, ${t.a11y.newTab})`}
              className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-6 lg:py-8"
            >
              <span className="t-title col-span-12 text-2xl transition-colors duration-300 group-hover:text-blue lg:col-span-4 lg:text-[1.875rem]">
                {item.name}
              </span>
              <span className="col-span-12 max-w-xl leading-snug text-mute lg:col-span-5">{item.desc}</span>
              <span className="t-label col-span-8 text-mute lg:col-span-2">
                {item.sector}
                <span className="block">{item.kind}</span>
              </span>
              <span className="col-span-4 flex items-center justify-end gap-2 self-center text-sm font-semibold lg:col-span-1">
                <span className="lg:sr-only">{more.ask}</span>
                <span className="grid size-10 flex-none place-items-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-blue group-hover:bg-blue group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function Work({ t }) {
  const w = t.work;
  return (
    <section id="work" className="wrap pt-24 lg:pt-40">
      <header className="grid gap-x-6 gap-y-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="t-label text-mute">
            {w.label} <span className="t-num">(0{w.cases.length})</span>
          </p>
          <Lines as="h2" lines={[w.title]} className="t-display mt-4 text-[clamp(2.5rem,7.2vw,6.75rem)]" />
        </div>
        <Reveal as="p" className="max-w-md text-lg leading-[1.4] text-mute lg:col-span-4 lg:pb-3">
          {w.intro}
        </Reveal>
      </header>

      <div className="mt-14 lg:mt-24">
        {w.cases.map((c, i) => (
          <CaseStudy key={c.id} c={c} index={i} t={t} />
        ))}
      </div>

      <MoreWork t={t} />
    </section>
  );
}
