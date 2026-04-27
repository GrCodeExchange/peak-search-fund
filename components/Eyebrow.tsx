export default function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`tag ${className}`}>{children}</span>;
}
