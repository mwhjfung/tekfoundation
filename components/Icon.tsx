// Inline SVG icon set (24px grid, 1.8px stroke) so iconography always loads.

const paths: Record<string, React.ReactNode> = {
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.5 3.6-5.5 7-5.5s6.2 2 7 5.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c.6-3 2.9-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
      <path d="M15.5 5.8a3 3 0 0 1 0 5.4" />
      <path d="M17.5 14.9c1.7.7 2.7 2.2 3 4.1" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3.5" width="10" height="17" rx="1" />
      <path d="M14 9.5h5a1 1 0 0 1 1 1v10" />
      <path d="M3 20.5h18" />
      <path d="M7.5 7.5h3M7.5 11h3M7.5 14.5h3" />
    </>
  ),
  design: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 18v2.5M16 18v2.5" />
      <circle cx="6" cy="6.5" r="0.4" fill="currentColor" />
    </>
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13 4-2.5 16" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H7l9 4.5V6L7 10.5H4.5A1.5 1.5 0 0 0 3 12" />
      <path d="M16 9.5a8 8 0 0 1 4 2.5 8 8 0 0 1-4 2.5" />
      <path d="M8.5 15.5 10 20" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8.5 15.5v-4M13 15.5V8M17.5 15.5v-6.5" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 6.5a4.5 4.5 0 0 1 5.8-4.2L17 5.6l1.4 1.4 3.3-3.3a4.5 4.5 0 0 1-6 5.9L7 18.3A2 2 0 1 1 4.2 15.5L12.9 7" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="6" ry="3" />
      <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
      <path d="M3 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <path d="M18 10.5c1.8.4 3 1.3 3 2.5v5c0 1.4-1.9 2.6-4.5 2.9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10V6l-7-3Z" />
      <path d="m9 11.5 2.2 2.2L15.5 9.5" />
    </>
  ),
  laptop: (
    <>
      <rect x="4.5" y="5" width="15" height="10" rx="1.5" />
      <path d="M2.5 18.5h19" />
      <path d="m10 9-1.6 1.5L10 12M14 9l1.6 1.5L14 12" />
    </>
  ),
  cap: (
    <>
      <path d="m12 4 10 4.5L12 13 2 8.5 12 4Z" />
      <path d="M6.5 10.5v4.5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-4.5" />
      <path d="M22 8.5V14" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7.5-4.7-9-9.2C2 7.9 4 5 7 5c2 0 3.7 1.1 5 3 1.3-1.9 3-3 5-3 3 0 5 2.9 4 5.8-1.5 4.5-9 9.2-9 9.2Z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5L19.5 7" />,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  quote: (
    <path
      d="M10 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V7Zm10 0h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V7Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linkedin: (
    <path
      d="M5.4 3.6a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.8 9h3.2v11.4H3.8V9Zm5.7 0h3v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 4 2.2 4 5v6.5h-3.2v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9.5V9Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.8,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
