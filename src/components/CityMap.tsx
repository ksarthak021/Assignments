export function CityMap() {
  return (
    <svg
      className="city-map"
      viewBox="0 0 640 760"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Delivery map showing laundry pickup and drop-off route"
    >
      <defs>
        <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#D7E8F4" />
          <stop offset="1" stopColor="#C5DCEB" />
        </linearGradient>
        <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#6EB4D8" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Land base */}
      <rect width="640" height="760" fill="#EEF3F6" />

      {/* Water / river */}
      <path
        d="M410 -20 C390 80 420 160 400 260 C380 360 430 440 410 540 C390 640 430 720 415 800 L640 800 L640 -20 Z"
        fill="url(#water)"
      />
      <path
        d="M-20 520 C80 500 140 560 240 540 C340 520 380 580 480 560 C560 545 620 580 680 560 L680 800 L-20 800 Z"
        fill="url(#water)"
        opacity="0.85"
      />

      {/* Parks */}
      <rect x="72" y="88" width="96" height="150" rx="10" fill="#D7E6D8" />
      <rect x="188" y="120" width="54" height="88" rx="8" fill="#D7E6D8" />
      <rect x="96" y="360" width="120" height="70" rx="10" fill="#D7E6D8" />
      <rect x="250" y="430" width="70" height="110" rx="10" fill="#D7E6D8" />
      <rect x="500" y="90" width="80" height="60" rx="8" fill="#D7E6D8" />

      {/* Street grid */}
      <g stroke="#D5DEE6" strokeWidth="7" fill="none" strokeLinecap="round">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="20" x2="620" y1={60 + i * 68} y2={60 + i * 68} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} y1="20" y2="740" x1={48 + i * 72} x2={48 + i * 72} />
        ))}
      </g>

      {/* Blocks */}
      <g fill="#E6ECF1">
        <rect x="56" y="72" width="48" height="40" rx="4" />
        <rect x="280" y="72" width="70" height="40" rx="4" />
        <rect x="56" y="200" width="90" height="50" rx="4" />
        <rect x="300" y="200" width="60" height="50" rx="4" />
        <rect x="56" y="470" width="70" height="55" rx="4" />
        <rect x="340" y="540" width="80" height="45" rx="4" />
        <rect x="470" y="200" width="55" height="70" rx="4" />
        <rect x="520" y="400" width="70" height="50" rx="4" />
      </g>

      {/* Bridge */}
      <path
        d="M330 340 C370 320 430 320 470 340"
        stroke="#C9D5E0"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      {/* Route */}
      <path
        className="city-map__route"
        d="M140 620 C180 560 210 500 250 460 C290 420 320 390 360 360 C400 330 450 300 510 250 C540 225 560 190 575 150"
        stroke="#7EC4E6"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#routeGlow)"
      />

      {/* Van on route */}
      <g className="city-map__van" transform="translate(348 348)">
        <rect x="-18" y="-10" width="36" height="20" rx="5" fill="#1B2430" />
        <rect x="8" y="-6" width="14" height="12" rx="3" fill="#3A4658" />
        <circle cx="-10" cy="12" r="4" fill="#8FA0B3" />
        <circle cx="10" cy="12" r="4" fill="#8FA0B3" />
      </g>
    </svg>
  )
}
