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
  metadataBase: new URL("https://mazzo.vittalix.com.br"),
  title: "Guilherme Mazzo — Desenvolvedor Full-Stack & SaaS",
  description:
    "Desenvolvedor Full-Stack e fundador da Vittalix. Criação de ecossistemas SaaS complexos, PWAs mobile-first e soluções automatizadas, com orquestração por IA. Criador do ProntuIA.",
  keywords: [
    "Guilherme Mazzo",
    "Desenvolvedor Full-Stack",
    "SaaS",
    "PWA",
    "ProntuIA",
    "Vittalix",
    "Orquestração por IA",
    "Supabase",
    "Next.js",
    "WebRTC",
  ],
  authors: [{ name: "Guilherme Augusto Mazzo de Oliveira" }],
  openGraph: {
    title: "Guilherme Mazzo — Desenvolvedor Full-Stack & SaaS",
    description:
      "Ecossistemas SaaS complexos, PWAs mobile-first e soluções automatizadas, com orquestração por IA. Criador do ProntuIA.",
    type: "website",
    locale: "pt_BR",
    url: "https://mazzo.vittalix.com.br",
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
