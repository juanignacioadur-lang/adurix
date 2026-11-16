import { ArrowUpRight } from './ui.jsx';

// Same condition as the hover-scroll rule in index.css.
const POINTER_DESKTOP = '(hover: hover) and (min-width: 64rem)';

/**
 * Phone frame holding a real mobile capture.
 * With `pan`, a tall capture scrolls slowly inside the screen.
 */
export function Phone({ shot, alt = '', pan = false, eager = false, className = '', style }) {
  return (
    <div className={`phone ${pan ? 'phone-pan' : ''} ${className}`} style={style}>
      <div className="phone-body">
        <div className="phone-screen">
          <picture>
            <source type="image/avif" srcSet={shot.avif} />
            <img
              src={shot.webp}
              alt={alt}
              width="600"
              height={pan ? 4000 : 1298}
              loading={eager ? 'eager' : 'lazy'}
              fetchPriority={eager ? 'high' : 'auto'}
              decoding="async"
              draggable="false"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

/**
 * Browser frame holding a real desktop capture. On pointer devices it loads a
 * tall capture of the page, which scrolls when the parent `.case-stage` is hovered.
 */
export function Browser({ project, alt = '', openLabel }) {
  const { shots, domain } = project;
  const sizes = '(min-width: 64rem) 70vw, 92vw';
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="flex flex-1 items-center">
          <span className="browser-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </span>
        <span className="flex h-6 min-w-0 max-w-[60%] items-center rounded-full bg-white/10 px-4 font-mono text-[0.6875rem] tracking-wide text-white/80">
          <span className="truncate">{domain}</span>
        </span>
        <span className="flex flex-1 items-center justify-end gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-white/70">
          <span className="max-sm:hidden">{openLabel}</span>
          <ArrowUpRight className="size-3" />
        </span>
      </div>
      <div className="browser-view">
        <picture>
          <source media={POINTER_DESKTOP} type="image/avif" srcSet={shots.scroll.avif} />
          <source media={POINTER_DESKTOP} type="image/webp" srcSet={shots.scroll.webp} />
          <source type="image/avif" srcSet={`${shots.desktopSm.avif} 960w, ${shots.desktop.avif} 1600w`} sizes={sizes} />
          <source type="image/webp" srcSet={`${shots.desktopSm.webp} 960w, ${shots.desktop.webp} 1600w`} sizes={sizes} />
          <img src={shots.desktop.webp} alt={alt} width="1600" height="1000" loading="lazy" decoding="async" draggable="false" />
        </picture>
      </div>
    </div>
  );
}
