export function Wordmark() {
  return (
    <span className="wordmark">
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path
          d="M4 28 V16.2 C4 7.2 32 7.2 32 16.2 V28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M11 28 V18.4 C11 13.2 25 13.2 25 18.4 V28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path d="M18 13.2 V28" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="wordmark-text">
        <strong>SVTP</strong>
        <span>Events</span>
      </span>
    </span>
  );
}
