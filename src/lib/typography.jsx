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
