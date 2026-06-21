import type { ReactNode } from "react";

const tileColor: Record<string, string> = {
  react:      "#1f2a30",
  nextjs:     "#111111",
  nodejs:     "#3c873a",
  python:     "#2f6f9f",
  fastapi:    "#059487",
  typescript: "#2f74c0",
  cpp:        "#004482",
  postgresql: "#33648f",
  sqlite:     "#2f3b45",
  tailwind:   "#1b9bd1",
  git:        "#e84d31",
};

const glyph: Record<string, ReactNode> = {
  react: (
    <g fill="none" stroke="#61dafb" strokeWidth="1.1">
      <circle cx="12" cy="12" r="1.7" fill="#61dafb" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </g>
  ),
  nextjs: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 16.5V7.5l8 9.5" /><path d="M15.6 7.5v6" />
    </g>
  ),
  nodejs: (
    <path d="M12 3.2 19.5 7.5v9L12 20.8 4.5 16.5v-9L12 3.2Zm0 4.3c-2 0-3.4 1-3.4 2.6 0 1.7 1.3 2.1 3.2 2.5 1.5.3 1.9.5 1.9 1 0 .5-.5.9-1.5.9-1.2 0-1.7-.4-1.8-1.2H8.6c.1 1.6 1.2 2.6 3.5 2.6 2.1 0 3.5-1 3.5-2.6 0-1.6-1.2-2.1-3.2-2.5-1.6-.3-1.9-.5-1.9-1 0-.4.4-.8 1.4-.8 1 0 1.4.3 1.6 1h1.5c-.1-1.5-1.2-2.5-3.1-2.5Z" fill="#ffffff" />
  ),
  python: (
    <g>
      <path d="M12 3c-2.4 0-4 1-4 2.6V8h4v.7H6.4C4.9 8.7 4 10 4 12s.9 3.3 2.4 3.3H8V13c0-1.6 1.4-2.8 3-2.8h2.4c1.3 0 2.3-1 2.3-2.3V5.6C15.7 4 14.3 3 12 3Zm-1.4 1.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" fill="#ffd544" />
      <path d="M12 21c2.4 0 4-1 4-2.6V16h-4v-.7h5.6c1.5 0 2.4-1.3 2.4-3.3s-.9-3.3-2.4-3.3H16V11c0 1.6-1.4 2.8-3 2.8h-2.4c-1.3 0-2.3 1-2.3 2.3v2.3C8.3 20 9.7 21 12 21Zm1.4-1.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" fill="#ffffff" />
    </g>
  ),
  fastapi: (
    <path d="m12.6 3-6.1 9.4h4.3L10 21l6.1-9.4h-4.3L12.6 3Z" fill="#ffffff" />
  ),
  typescript: (
    <g fill="#ffffff">
      <path d="M6.5 10.2h6v1.5H10v6.3H8.3v-6.3H6.5v-1.5Z" />
      <path d="M13 17.4c.5.5 1.4.9 2.4.9 1.6 0 2.7-.8 2.7-2.2 0-1.2-.7-1.8-2-2.3l-.6-.2c-.6-.3-.9-.4-.9-.8 0-.3.3-.6.8-.6.5 0 .8.2 1 .6l1.3-.8c-.5-.9-1.3-1.2-2.3-1.2-1.5 0-2.4.9-2.4 2.1 0 1.2.7 1.7 1.8 2.2l.6.2c.7.3 1 .5 1 .9 0 .4-.3.6-.9.6-.7 0-1.1-.3-1.4-.8L13 17.4Z" />
    </g>
  ),
  cpp: (
    <g fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
      <text x="4" y="14">C++</text>
    </g>
  ),
  postgresql: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.3">
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.6" />
      <path d="M5.5 6.5v11c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6v-11" />
      <path d="M5.5 12c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6" />
    </g>
  ),
  sqlite: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.3">
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.6" />
      <path d="M5.5 6.5v11c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6v-11" />
    </g>
  ),
  tailwind: (
    <path d="M12 6.5c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.4 1 1 2.2 2.1 4.5 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-2-1.4-1-1-2.2-2.1-4.5-2.1Zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 2 1.4 1 1 2.2 2.1 4.5 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-2-1.4-1-1-2.2-2.1-4.5-2.1Z" fill="#7fd6f2" />
  ),
  git: (
    <g fill="#ffffff">
      <path d="M8 6.5a1.6 1.6 0 1 0 1.7 2.3l2.3 2.3v5a1.6 1.6 0 1 0 1.5 0v-4l2.3 2.3a1.6 1.6 0 1 0 1.1-1.1l-3-3a1.6 1.6 0 0 0-1.8-2.5L9.7 7.4A1.6 1.6 0 0 0 8 6.5Z" />
    </g>
  ),
};

export function TechBadge({ name, slug }: { name: string; slug: string }) {
  return (
    <span className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-3 py-2.5 shadow-sm transition hover:shadow-md hover:-translate-y-px">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: tileColor[slug] ?? "#2f241d" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
          {glyph[slug] ?? <text x="4" y="16" fill="white" fontSize="9" fontFamily="monospace">{name.slice(0,3)}</text>}
        </svg>
      </span>
      <span className="text-sm font-medium">{name}</span>
    </span>
  );
}
