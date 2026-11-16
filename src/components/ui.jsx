import { useInView } from '../lib/hooks.js';

/** Fades and lifts its children into place when scrolled into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Headline revealed line by line from behind a mask. */
export function Lines({ as: Tag = 'h2', lines, className = '', delay = 0, stagger = 90, shown, ...rest }) {
  const [ref, inView] = useInView();
  const visible = shown ?? inView;
  return (
    <Tag ref={ref} className={`${className} ${visible ? 'is-in' : ''}`} {...rest}>
      {lines.map((line, i) => (
        <span className="mask" key={i} style={{ '--d': `${delay + i * stagger}ms` }}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Colours the closing full stop of a headline line — the one accent in the type. */
export function withDot(line, className = 'text-blue') {
  if (typeof line !== 'string' || !line.endsWith('.')) return line;
  return (
    <>
      {line.slice(0, -1)}
      <span className={className}>.</span>
    </>
  );
}

const ArrowPath = () => <path d="M4.25 11.75 11.5 4.5M5.5 4.25h6.25v6.25" />;

export function ArrowUpRight({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" className={className} aria-hidden="true">
      <ArrowPath />
    </svg>
  );
}

export function ArrowDown({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" className={className} aria-hidden="true">
      <path d="M8 2.75v10M3.75 8.75 8 13l4.25-4.25" />
    </svg>
  );
}

/** Arrow that swaps itself on hover of the parent link/button. */
export function Swap({ className = '' }) {
  return (
    <span className={`swap ${className}`} aria-hidden="true">
      <ArrowUpRight />
      <ArrowUpRight />
    </span>
  );
}

export function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24ZM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48Z" />
    </svg>
  );
}
