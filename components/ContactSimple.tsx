/**
 * @section ContactSimple
 * @description Clean contact section — email, phone, LinkedIn, location displayed as icon cards
 * @props {
 *   "eyebrow": "string?",
 *   "headline": "string",
 *   "headlineAccent": "string?",
 *   "body": "string?",
 *   "email": "string?",
 *   "phone": "string?",
 *   "location": "string?",
 *   "linkedinUrl": "string?",
 *   "linkedinLabel": "string?"
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
  email?: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  linkedinLabel?: string;
}

export default function ContactSimple({ id, eyebrow, headline, headlineAccent, body, email, phone, location, linkedinUrl, linkedinLabel }: Props) {
  const items = [
    email    && { icon: "M2 4h12c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm0 0l6 5 6-5", label: "Email", value: email, href: `mailto:${email}` },
    phone    && { icon: "M3 3h2l1 4-1.5 1.5A11 11 0 009.5 13L11 11.5l4 1v2A1 1 0 0114 15 11 11 0 012 4a1 1 0 011-1z", label: "Phone", value: phone, href: `tel:${phone.replace(/\D/g,"")}` },
    linkedinUrl && { icon: "M4 6H2v8h2V6zm-1-3a1 1 0 100 2 1 1 0 000-2zm11 3h-2v1.5C12 7 11.1 6 10 6 8.3 6 7 7.3 7 9v5h2V9.5c0-.8.7-1.5 1.5-1.5S12 8.7 12 9.5V14h2V9c0-1.7-1.3-3-3-3", label: linkedinLabel || "LinkedIn", value: linkedinLabel || "Connect", href: linkedinUrl },
    location && { icon: "M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z", label: "Location", value: location, href: undefined },
  ].filter(Boolean) as Array<{ icon: string; label: string; value: string; href?: string }>;

  return (
    <section id={id ?? "contact"} className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            {eyebrow && <div style={{ marginBottom: "1.25rem" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
            <SplitHeadline dark={headline} accent={headlineAccent} style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: body ? "1.25rem" : 0 }} />
            {body && <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "var(--color-secondary)", lineHeight: 1.8 }}>{body}</p>}
          </div>

          {/* Right — contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((item, i) => (
              <div key={i} className="card" style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.25rem 1.5rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", background: "rgba(122,155,171,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent-dark)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-secondary)", marginBottom: "0.2rem" }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="link-fg" style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500 }}>{item.value}</a>
                    : <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--color-fg)" }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #contact .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </section>
  );
}
