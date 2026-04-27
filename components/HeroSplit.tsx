/**
 * @section HeroSplit
 * @description 50/50 split hero — text left, abstract geometric accent right
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "body": "string",
 *   "ctaPrimary": "string?",
 *   "ctaPrimaryHref": "string?",
 *   "ctaSecondary": "string?",
 *   "ctaSecondaryHref": "string?",
 *   "accentWord": "string? — large decorative word shown in right panel"
 * }
 */
import Eyebrow from "@/components/Eyebrow";
import SplitHeadline from "@/components/SplitHeadline";

interface Props {
  id?: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  body: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  accentWord?: string;
}

export default function HeroSplit({ id, eyebrow, headline, headlineAccent, body, ctaPrimary, ctaPrimaryHref = "#contact", ctaSecondary, ctaSecondaryHref = "#about", accentWord }: Props) {
  return (
    <section id={id ?? "top"} style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "64px", overflow: "hidden" }}>
      {/* Left — text */}
      <div style={{ display: "flex", alignItems: "center", padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 5rem)", background: "var(--color-bg)", position: "relative" }}>
        {/* Dot texture */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, var(--color-border) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.6, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "540px" }}>
          {eyebrow && (
            <div className="anim-fade-up" style={{ marginBottom: "1.5rem" }}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <SplitHeadline
            dark={headline}
            accent={headlineAccent}
            level="h1"
            className="anim-fade-up delay-1"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "1.5rem" }}
          />
          <p className="anim-fade-up delay-2" style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--color-secondary)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "440px" }}>
            {body}
          </p>
          <div className="anim-fade-up delay-3" style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            {ctaPrimary && <a href={ctaPrimaryHref} className="btn-primary">{ctaPrimary} <ArrowIcon /></a>}
            {ctaSecondary && <a href={ctaSecondaryHref} className="btn-secondary">{ctaSecondary}</a>}
          </div>
        </div>
      </div>

      {/* Right — skyline image panel */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/rl-v2.jpeg"
          alt="Raleigh skyline"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(30,50,71,0.45)" }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#top { grid-template-columns: 1fr; }
          section#top > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
