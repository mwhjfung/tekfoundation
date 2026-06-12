"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/charities", label: "For Charities" },
  { href: "/volunteers", label: "For Volunteers" },
  { href: "/partners", label: "For Partners" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" aria-label="tekFoundation home" onClick={() => setOpen(false)}>
          <img src="/images/logos/brand/tekfoundation-logo-icon.png" alt="" aria-hidden="true" />
          <span className="nav__wordmark">
            tekFoundation<span>.</span>
          </span>
        </Link>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />}
          </svg>
        </button>

        <nav className="nav__links" data-open={open}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav__link"
              aria-current={pathname === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/donate" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
