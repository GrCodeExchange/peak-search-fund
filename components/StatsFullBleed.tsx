/**
 * @section StatsFullBleed
 * @description Dark full-bleed stats section — large numbers on dark background with optional headline
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "body": "string?",
 *   "stats": "Array<{value:string,label:string}>"
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
  stats?: Array<{ value: string; label: string }>;
}

export default function StatsFullBleed({ id, eyebrow, headline, headlineAccent, body, stats = [] }: Props) {
  return (
    <section id={id ?? "stats"} className="section dark-bg" style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: "-30%", right: "-10%", width: "50%", height: "80%", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left — headline */}
          <div>
            {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
            <SplitHeadline dark={headline} accent={headlineAccent} variant="dark-bg" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff", marginBottom: body ? "1.25rem" : 0 }} />
            {body && <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{body}</p>}
          </div>

          {/* Right — stats */}
          <div style={{ display: "grid", gridTemplateColumns: stats.length >= 4 ? "1fr 1fr" : `repeat(${Math.min(stats.length, 3)}, 1fr)`, gap: "2rem" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-accent)", lineHeight: 1, marginBottom: "0.5rem" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #stats.dark-bg .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </section>
  );
}
