import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Mazzo — Founder & CEO da Vittalix",
  description:
    "Founder & CEO da Vittalix. Especialista em Infraestrutura de TI, VoIP e desenvolvimento de ecossistemas SaaS com IA para saúde, governo e serviços.",
  keywords: [
    "Guilherme Mazzo",
    "Vittalix",
    "Infraestrutura de TI",
    "VoIP",
    "SaaS",
    "IA",
    "Desenvolvimento de Software",
  ],
  authors: [{ name: "Guilherme Augusto Mazzo" }],
  openGraph: {
    title: "Guilherme Mazzo — Founder & CEO da Vittalix",
    description:
      "Especialista em Infraestrutura de TI, VoIP e desenvolvimento de ecossistemas SaaS com IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
