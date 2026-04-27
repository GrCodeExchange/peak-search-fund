/**
 * @section FooterWordmark
 * @description Footer with giant brand wordmark — visually striking closing statement
 * @props {
 *   "brandName": "string",
 *   "tagline": "string?",
 *   "email": "string?",
 *   "linkedinUrl": "string?",
 *   "linkedinLabel": "string?",
 *   "location": "string?",
 *   "copyright": "string?"
 * }
 */
interface Props {
  brandName: string;
  tagline?: string;
  email?: string;
  linkedinUrl?: string;
  linkedinLabel?: string;
  location?: string;
  copyright?: string;
}

export default function FooterWordmark({ brandName, tagline, email, linkedinUrl, linkedinLabel, location, copyright }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--color-accent-dark)", color: "#fff", overflow: "hidden" }}>
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            {tagline && <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", maxWidth: "320px", lineHeight: 1.7 }}>{tagline}</p>}
          </div>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {email && <a href={`mailto:${email}`} style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{email}</a>}
            {linkedinUrl && <a href={linkedinUrl} style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{linkedinLabel || "LinkedIn"}</a>}
            {location && <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)" }}>{location}</span>}
          </div>
        </div>

        {/* Giant wordmark */}
        <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 18vw, 14rem)", color: "rgba(255,255,255,0.07)", lineHeight: 0.85, letterSpacing: "-0.04em", userSelect: "none", marginLeft: "-0.04em" }}>
            {brandName}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
            {copyright || `© ${year} ${brandName}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
