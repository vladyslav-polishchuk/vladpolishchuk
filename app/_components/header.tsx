"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Arrow } from "./link-with-arrow";

type NavItem = { href: string; label: string };

export function Header({ name, links }: { name: string; links: readonly NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="container header-inner">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>{name}<span>.</span></Link>
        <button className="menu-toggle" ref={toggle} type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d={open ? "m6 6 12 12M18 6 6 18" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        <nav id="site-navigation" className="site-nav" data-open={open} aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link key={href} href={href} className={href === "/contact" ? "nav-contact" : undefined} aria-current={pathname === href ? "page" : undefined} data-active={active} onClick={() => setOpen(false)}>
                {label}
                {href === "/contact" && <Arrow external />}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
