import type { CSSProperties } from "react";

interface Props {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export default function SectionShell({ id, className = "section", style, children }: Props) {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  );
}
