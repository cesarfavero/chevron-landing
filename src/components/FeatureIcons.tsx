export function FeatureIcon({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  const props = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "route":
      return (
        <svg {...props}>
          <path d="M4 18h4a3 3 0 0 0 0-6H6a3 3 0 0 1 0-6h4" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M18 8v8" />
        </svg>
      );
    case "nav":
      return (
        <svg {...props}>
          <path d="M12 3l7 18-7-4-7 4 7-18z" />
        </svg>
      );
    case "club":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "chat":
      return (
        <svg {...props}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      );
    case "events":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </svg>
      );
    case "sos":
      return (
        <svg {...props}>
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
