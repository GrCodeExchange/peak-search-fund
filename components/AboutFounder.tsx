/**
 * @section AboutFounder
 * @description Founder/person bio — initials avatar left, bio text right with credentials grid
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "bioP1": "string",
 *   "bioP2": "string?",
 *   "credentials": "Array<{label:string,value:string}> — e.g. Education, Background, Location",
 *   "quote": "string? — optional pull quote"
 * }
 */
import Eyebrow from "@/components/Eyebrow";
import SplitHeadline from "@/components/SplitHeadline";

interface Props {
  id?: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  bioP1: string;
  bioP2?: string;
  credentials?: Array<{ label: string; value: string }>;
  quote?: string;
}

export default function AboutFounder({ id, eyebrow, headline, headlineAccent, bioP1, bioP2, credentials = [], quote }: Props) {
  const initials = headline.split(" ").map(w => w[0]).filter(c => /[A-Za-z]/.test(c)).slice(0, 2).join("");

  return (
    <section id={id ?? "about"} className="section surface">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
          {/* Left — avatar card */}
          <div>
            <div style={{ background: "var(--color-accent-dark)", borderRadius: "var(--radius-card)", padding: "3rem 2rem", textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{ width: "96px", height: "96px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff" }}>
                {initials}
              </div>
              {quote && (
                <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: 0 }}>
                  &ldquo;{quote}&rdquo;
                </blockquote>
              )}
            </div>
            {/* Credentials */}
            {credentials.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {credentials.map((c, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.875rem 0", borderBottom: "1px solid var(--color-border)" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-secondary)" }}>{c.label}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-fg)", textAlign: "right", maxWidth: "60%" }}>{c.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — bio */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}</div>
            <SplitHeadline
              dark={headline}
              accent={headlineAccent}
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: "2rem" }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{bioP1}</p>
            {bioP2 && <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-secondary)", lineHeight: 1.8 }}>{bioP2}</p>}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
