/**
 * @section NavMinimal
 * @description Sticky top nav — logo left, links center/right, optional CTA button
 * @props {
 *   "brandName": "string",
 *   "links": "Array<{label:string,href:string}>",
 *   "ctaLabel": "string?",
 *   "ctaHref": "string?"
 * }
 */
"use client";
import { useState, useEffect } from "react";

interface Props {
  brandName: string;
  links?: Array<{ label: string; href: string }>;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function NavMinimal({ brandName, links = [], ctaLabel, ctaHref = "#contact" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(248,248,246,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      transition: "all 0.25s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <a href="#top" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, textDecoration: "none", color: "var(--color-fg)" }}>
            {brandName}
          </a>
          <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-20deg)", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em", color: "rgba(185,28,28,0.8)", fontFamily: "sans-serif", pointerEvents: "none", whiteSpace: "nowrap", textTransform: "uppercase", border: "1.5px solid rgba(185,28,28,0.7)", padding: "1px 5px", userSelect: "none", lineHeight: 1, borderRadius: "2px" }}>DEMO</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-secondary)", textDecoration: "none", fontWeight: 500, transition: "color 0.15s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg)")}
               onMouseLeave={e => (e.currentTarget.style.color = "var(--color-secondary)")}
            >{l.label}</a>
          ))}
          {ctaLabel && <a href={ctaHref} className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>{ctaLabel}</a>}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }} className="nav-hamburger" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <><path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              : <><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", padding: "1rem 0" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 style={{ padding: "0.75rem 0", fontFamily: "var(--font-body)", fontSize: "1rem", textDecoration: "none", color: "var(--color-fg)", borderBottom: "1px solid var(--color-border)" }}>
                {l.label}
              </a>
            ))}
            {ctaLabel && <a href={ctaHref} className="btn-primary" style={{ marginTop: "1rem", alignSelf: "flex-start" }}>{ctaLabel}</a>}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
