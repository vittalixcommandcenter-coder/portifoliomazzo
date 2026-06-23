# Portfólio — Guilherme Augusto Mazzo

Site pessoal (portfólio + currículo) construído com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e **Lucide React**.

## ✨ Destaques de design

- Paleta escura sofisticada (Obsidian) com acentos em **Âmbar** e **Esmeralda** — zero azul/roxo.
- **Tilt 3D** nos cards de projetos com spotlight que segue o cursor.
- **Parallax** suave no Hero durante o scroll.
- Animações de entrada (**fade in + slide up**) na viewport via Framer Motion.
- **Glassmorphism** na navbar e nos cards.
- Grid de projetos com entrada em **cascata** (stagger children).
- Tipografia **Space Grotesk** (títulos) + **Inter** (corpo).
- Totalmente **responsivo / mobile-first** e com `prefers-reduced-motion`.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

Build de produção:

```bash
npm run build && npm start
```

## 🖼️ Personalização

Quase todo o conteúdo está centralizado em [`lib/data.ts`](lib/data.ts) — edite ali nome, título, experiências, projetos e links sociais.

### Sua foto

1. Coloque sua foto em `public/profile.jpg` (recomendado: 600×600, quadrada).
2. Em [`lib/data.ts`](lib/data.ts), troque `photo: "/profile.svg"` por `photo: "/profile.jpg"`.

### Seu currículo (CV)

Coloque o PDF em `public/cv.pdf` — o botão **Baixar CV** já aponta para lá.

### Links sociais

Edite o objeto `socials` em [`lib/data.ts`](lib/data.ts) (LinkedIn, GitHub, e-mail).

## 📁 Estrutura

```
app/
  layout.tsx      → fontes, metadata, html shell
  page.tsx        → composição das seções
  globals.css     → design system (glass, gradientes, scrollbar)
components/
  Navbar.tsx      → nav glass + menu mobile
  Hero.tsx        → hero com parallax e avatar com anel
  About.tsx       → sobre mim + pilares
  Experience.tsx  → timeline vertical animada
  Projects.tsx    → grid com Tilt 3D + stagger
  Footer.tsx      → contato e links
  Reveal.tsx      → wrapper de animação na viewport
  TiltCard.tsx    → inclinação 3D + spotlight
  SectionHeading.tsx
lib/
  data.ts         → TODO o conteúdo editável
public/
  profile.svg     → placeholder (troque pela sua foto)
```
