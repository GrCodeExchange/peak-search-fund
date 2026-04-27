import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peak Search Fund | Business Acquisition — Virginia & North Carolina",
  description: "Peak Search Fund acquires profitable, owner-operated industrial and manufacturing businesses in Virginia and North Carolina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <div style={{ position: "fixed", bottom: "1.25rem", right: "1.25rem", zIndex: 9999, background: "rgba(185,28,28,0.92)", color: "#fff", fontFamily: "sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "0.35rem 0.7rem", borderRadius: "4px", pointerEvents: "none", userSelect: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
          Demo Only
        </div>
      </body>
    </html>
  );
}
