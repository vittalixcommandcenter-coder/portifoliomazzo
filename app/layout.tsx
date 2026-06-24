import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { config } from "@/lib/data";
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
  creator: "Guilherme Augusto Mazzo de Oliveira",
  alternates: {
    canonical: "https://mazzo.vittalix.com.br",
  },
  openGraph: {
    title: "Guilherme Mazzo — Desenvolvedor Full-Stack & SaaS",
    description:
      "Ecossistemas SaaS complexos, PWAs mobile-first e soluções automatizadas, com orquestração por IA. Criador do ProntuIA.",
    type: "website",
    locale: "pt_BR",
    url: "https://mazzo.vittalix.com.br",
    siteName: "Guilherme Mazzo",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Guilherme Mazzo — Desenvolvedor Full-Stack & SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Mazzo — Desenvolvedor Full-Stack & SaaS",
    description:
      "Ecossistemas SaaS complexos, PWAs mobile-first e soluções com IA. Criador do ProntuIA.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash: aplica o tema salvo antes da primeira pintura */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';var r=document.documentElement;r.classList.toggle('light',t==='light');r.classList.toggle('dark',t!=='light');}catch(e){}})();`,
          }}
        />
        {/* Cloudflare Web Analytics (só carrega se houver token configurado) */}
        {config.cfAnalyticsToken && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${config.cfAnalyticsToken}"}`}
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
