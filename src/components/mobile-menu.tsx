"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileMenu({ links }: { links: [string, string][] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden">
      <button
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{ width: 40, height: 40, display: "grid", placeItems: "center", borderRadius: "0.6rem", border: "1px solid var(--border-hi)", color: "var(--fg)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <div style={{ position: "absolute", top: 60, left: 0, right: 0, background: "rgba(8,8,9,0.97)", borderBottom: "1px solid var(--border)", padding: "0.5rem 1rem 1rem", display: "grid", gap: 2 }}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              style={{ padding: "0.85rem 0.5rem", fontSize: "1rem", borderBottom: "1px solid var(--border)", color: "var(--fg)" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
