/**
 * @section ServicesIconGrid
 * @description Services or features as a 2-3 column icon grid with cards
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "body": "string?",
 *   "items": "Array<{icon:string,title:string,body:string}> — icon: star|bolt|shield|chart|people|globe|check|search|heart|leaf|lock|zap"
 * }
 */
import Eyebrow from "@/components/Eyebrow";
import SplitHeadline from "@/components/SplitHeadline";

interface Props {
  id?: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  body?: string;
  items?: Array<{ icon?: string; title: string; body: string }>;
}

const ICONS: Record<string, string> = {
  star:    "M8 1l1.85 3.75L14 5.55l-3 2.92.7 4.1L8 10.4l-3.7 2.17.7-4.1L2 5.55l4.15-.8L8 1z",
  bolt:    "M13 2L7 9h5l-5 9 6-8H8l5-9z",
  shield:  "M8 2l5.5 2.5v4c0 3-2.33 5.5-5.5 6.5C5.33 14 3 11.5 3 8.5v-4L8 2z",
  chart:   "M2 14V8l3-3 3 3 3-4 3 4v6H2z",
  people:  "M6 7a2 2 0 100-4 2 2 0 000 4zM2 14v-1c0-2 1.8-3 4-3h.5M10 7a2 2 0 100-4 2 2 0 000 4zM14 14v-1c0-2-1.8-3-4-3h-.5",
  globe:   "M8 1a7 7 0 100 14A7 7 0 008 1zm0 0c-1.7 0-3 3.1-3 7s1.3 7 3 7 3-3.1 3-7-1.3-7-3-7zM1 8h14M2.2 4.5h11.6M2.2 11.5h11.6",
  check:   "M2 8l4 4 8-8",
  search:  "M11 11l3 3M7.5 13a5.5 5.5 0 100-11 5.5 5.5 0 000 11z",
  heart:   "M8 13.4C4 10.8 1.5 8 1.5 5.5A3.5 3.5 0 018 3a3.5 3.5 0 016.5 2.5C14.5 8 12 10.8 8 13.4z",
  leaf:    "M7 14C7 10 2 7 2 4c0-2 2-3 3.5-2.5S8 3 8 3s.5-2 2.5-1.5S14 4 14 6c0 3-5 5-7 8z",
  lock:    "M5 7V4a3 3 0 116 0v3M4 7h8a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z",
  zap:     "M9.5 2l-6 8h5l-2 6 7-9H9.5l3-5h-3z",
};

export default function ServicesIconGrid({ id, eyebrow, headline, headlineAccent, body, items = [] }: Props) {
  const cols = items.length <= 3 ? items.length : items.length <= 6 ? 3 : 4;

  return (
    <section id={id ?? "services"} className="section">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
          <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", marginBottom: body ? "1.25rem" : 0 }} />
          {body && <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-secondary)", lineHeight: 1.75 }}>{body}</p>}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(cols, 3)}, 1fr)`, gap: "1.5rem" }}>
          {items.map((item, i) => {
            const path = ICONS[item.icon || "star"] || ICONS.star;
            return (
              <div key={i} className="card">
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "rgba(122,155,171,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent-dark)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "0.625rem", color: "var(--color-fg)" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--color-secondary)", lineHeight: 1.7 }}>{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #services .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { #services .container > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
