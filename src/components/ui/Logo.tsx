interface LogoProps {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
}

/**
 * Britos Junk logo: a truck mark (cab + box + wheels, forming a subtle
 * upward arrow through the negative space) paired with the wordmark.
 * Pure SVG so it stays crisp at any size and inherits currentColor
 * where useful.
 */
export default function Logo({ className = "", markSize = 34, showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill="#10B981" />
        <path
          d="M6 26.5V14.5C6 13.9477 6.44772 13.5 7 13.5H21C21.5523 13.5 22 13.9477 22 14.5V26.5"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 18.5H27.4142C27.7449 18.5 28.0605 18.6398 28.2828 18.8848L31.8686 22.8332C32.0505 23.0338 32.1515 23.2951 32.1515 23.5661V26.5"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 26.5H32.1515" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
        <circle cx="13" cy="27.5" r="3" fill="#050505" stroke="#34E8A0" strokeWidth="1.4" />
        <circle cx="27" cy="27.5" r="3" fill="#050505" stroke="#34E8A0" strokeWidth="1.4" />
      </svg>
      {showWordmark && (
        <span className="flex items-baseline gap-1.5 font-display text-lg tracking-tight">
          <span className="text-emerald">Britos</span>
          <span className="text-mist">Junk</span>
        </span>
      )}
    </span>
  );
}
