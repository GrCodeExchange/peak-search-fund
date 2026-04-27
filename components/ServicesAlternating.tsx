/**
 * @section ServicesAlternating
 * @description Services as alternating text+accent rows — good for 3-5 items with rich descriptions
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "items": "Array<{title:string,body:string,tag:string?}>"
 * }
 */
import Eyebrow from "@/components/Eyebrow";
import SplitHeadline from "@/components/SplitHeadline";

interface Props {
  id?: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  items?: Array<{ title: string; body: string; tag?: string }>;
}

export default function ServicesAlternating({ id, eyebrow, headline, headlineAccent, items = [] }: Props) {
  return (
    <section id={id ?? "services"} className="section surface-2">
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
          <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: "2rem",
              padding: "2.5rem 0",
              borderTop: "1px solid var(--color-border)",
              alignItems: "start",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--color-accent)", opacity: 0.4, lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-fg)" }}>{item.title}</h3>
                  {item.tag && <span className="tag">{item.tag}</span>}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--color-secondary)", lineHeight: 1.8, maxWidth: "620px" }}>{item.body}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
