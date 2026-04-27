/**
 * @section StatsRow
 * @description Horizontal row of 2-4 stats on white/surface background
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string?",
 *   "headlineAccent": "string?",
 *   "stats": "Array<{value:string,label:string,note:string?}>"
 * }
 */
import Eyebrow from "@/components/Eyebrow";
import SplitHeadline from "@/components/SplitHeadline";

interface Props {
  id?: string;
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  stats?: Array<{ value: string; label: string; note?: string }>;
}

export default function StatsRow({ id, eyebrow, headline, headlineAccent, stats = [] }: Props) {
  return (
    <section id={id ?? "stats"} className="section surface">
      <div className="container">
        {(eyebrow || headline) && (
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
            {headline && <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }} />}
          </div>
        )}
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`, gap: 0, borderTop: "1px solid var(--color-border)", borderLeft: "1px solid var(--color-border)" }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: "center",
              padding: "2.5rem 1.5rem",
              borderRight: "1px solid var(--color-border)",
              borderBottom: "1px solid var(--color-border)",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-accent-dark)", lineHeight: 1, marginBottom: "0.5rem" }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-fg)", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap", marginBottom: s.note ? "0.4rem" : 0 }}>{s.label}</div>
              {s.note && <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--color-secondary)" }}>{s.note}</div>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
