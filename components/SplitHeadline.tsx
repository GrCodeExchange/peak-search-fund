import type { CSSProperties } from "react";

interface Props {
  dark: string;
  accent?: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
  style?: CSSProperties;
  variant?: "default" | "white" | "dark-bg";
}

export default function SplitHeadline({ dark, accent, level: Tag = "h2", className = "", style, variant = "default" }: Props) {
  const accentColor = variant === "white" || variant === "dark-bg" ? "rgba(255,255,255,0.7)" : "var(--color-accent)";
  return (
    <Tag className={`display ${className}`} style={style}>
      {dark}
      {accent && (
        <>
          {" "}
          <em style={{ fontStyle: "italic", color: accentColor }}>{accent}</em>
        </>
      )}
    </Tag>
  );
}
