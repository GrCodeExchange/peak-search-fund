/**
 * @section ProcessSteps
 * @description Numbered process steps — 3-5 steps in a clean connected layout
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "body": "string?",
 *   "steps": "Array<{title:string,body:string}>"
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
  steps?: Array<{ title: string; body: string }>;
}

export default function ProcessSteps({ id, eyebrow, headline, headlineAccent, body, steps = [] }: Props) {
  return (
    <section id={id ?? "process"} className="section surface-2">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
          <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", marginBottom: body ? "1.25rem" : 0 }} />
          {body && <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-secondary)", lineHeight: 1.75 }}>{body}</p>}
        </div>

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${Math.min(steps.length, 4)}, 1fr)`, gap: "2rem" }}>
          {/* Connecting line */}
          <div aria-hidden="true" style={{ position: "absolute", top: "24px", left: "10%", right: "10%", height: "1px", background: "var(--color-border)", zIndex: 0 }} />

          {steps.map((step, i) => (
            <div key={i} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: i === 0 ? "var(--color-accent-dark)" : "var(--color-surface)", border: `2px solid ${i === 0 ? "var(--color-accent-dark)" : "var(--color-border)"}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.875rem", color: i === 0 ? "#fff" : "var(--color-secondary)" }}>
                {i + 1}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", color: "var(--color-fg)", marginBottom: "0.625rem" }}>{step.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-secondary)", lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #process .container > div:last-child { grid-template-columns: 1fr !important; } #process .container > div:last-child > div[aria-hidden] { display: none; } }
      `}</style>
    </section>
  );
}
