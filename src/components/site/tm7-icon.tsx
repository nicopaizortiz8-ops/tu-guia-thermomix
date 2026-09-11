/** Compact TM7 silhouette for the navigation wordmark. */
export function Tm7Icon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 112"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Low, rounded base and the forward-facing landscape touchscreen. */}
        <path
          d="M29 63Q50 57 71 63L85 94Q89 105 78 106H22Q11 105 15 94Z"
          fill="#242824"
          stroke="#171c18"
          strokeWidth="2"
        />
        {/* Insulated black mixing bowl, with its characteristic vertical ribs. */}
        <path
          d="M23 25H77L72 60Q70 73 50 75Q30 73 28 60Z"
          fill="#292e29"
          stroke="#171c18"
          strokeWidth="2.5"
        />
        <path
          d="M29 31L33 59M35 32L38 65M41 33L43 68M59 33L57 68M65 32L62 65M71 31L67 59"
          stroke="#62695e"
          strokeWidth="2"
        />
        {/* Lid and measuring cup. */}
        <path
          d="M20 24Q20 17 33 16H67Q80 17 80 24L76 29H24Z"
          fill="#242824"
          stroke="#171c18"
          strokeWidth="2"
        />
        <path d="M39 16L41 10Q50 7 59 10L61 16" fill="#353c34" stroke="#171c18" strokeWidth="2" />
        <path d="M28 22H72" stroke="#62695e" strokeWidth="2" />
        {/* Front handle is readable even at mobile logo sizes. */}
        <path d="M44 32Q50 29 56 32L55 67Q50 73 45 67Z" fill="#aeb3a6" stroke="#171c18" strokeWidth="2" />
        <path d="M49 37V63" stroke="#eef0e7" strokeWidth="2.5" />
        <path d="M24 79Q24 77 27 77H73Q76 77 76 79L79 99H21Z" fill="#111713" />
        <path d="M28 81H72L74 96H26Z" fill="#e7ecdf" />
        <path d="M32 85H45M32 89H41" stroke="#6b7d56" strokeWidth="2" />
        <rect x="51" y="84" width="16" height="9" rx="2" fill="#879973" />
        <path d="M45 102H55" stroke="#879973" strokeWidth="2" />
      </g>
    </svg>
  );
}
