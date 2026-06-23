import {
  Car,
  FileSignature,
  Stethoscope,
  AudioLines,
  Scissors,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Network,
  Palette,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * CONTEÚDO CENTRALIZADO
 * Edite tudo por aqui — as seções consomem estes dados.
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Guilherme Augusto Mazzo de Oliveira",
  shortName: "Guilherme Mazzo",
  role: "Desenvolvedor Full-Stack & Fundador da Vittalix",
  // Pitch principal exibido no Hero
  pitch:
    "Desenvolvedor Full-Stack focado na criação de ecossistemas SaaS complexos, aplicações mobile-first (PWAs) e soluções automatizadas de ponta a ponta.",
  // Diferencial estratégico (subtexto)
  differentiator:
    "Especialista em orquestração de software acelerada por IA, unindo arquiteturas modernas de dados a uma sólida bagagem de infraestrutura de rede, segurança de borda e comunicação em tempo real.",
  // Coloque sua foto em /public/profile.jpg
  photo: "/profile.jpg",
  photoFallback: "/profile.svg",
  // Coloque seu currículo em /public/cv.pdf
  cv: "/cv.pdf",
  site: "https://mazzo.vittalix.com.br",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/guilhermemazzoo/",
  github: "https://github.com/vittalixcommandcenter-coder",
  email: "guilhermazzo@gmail.com",
};

/* Texto da seção "Sobre" */
export const about = {
  lead: "Eu construo ecossistemas SaaS completos — do banco de dados ao pixel final.",
  paragraphs: [
    "Sou desenvolvedor Full-Stack e fundador da Vittalix, onde projeto e desenvolvo plataformas SaaS complexas, PWAs mobile-first e soluções automatizadas de ponta a ponta. Meu trabalho vai da modelagem de dados e da arquitetura de backend até interfaces com padrão visual premium e fluxos sem atrito.",
    "Meu diferencial é a orquestração de software acelerada por IA: combino plataformas de desenvolvimento assistido e LLMs em produção com uma base de engenharia sólida para entregar produtos completos com velocidade e qualidade.",
    "Antes do desenvolvimento, atuei profundamente com infraestrutura de redes e comunicação em tempo real. Não me posiciono como profissional de telecom — mas essa bagagem virou um diferencial técnico real: entendo latência, concorrência de pacotes, segurança de borda e alta disponibilidade num nível que poucos desenvolvedores alcançam.",
  ],
};

/* Estatísticas rápidas exibidas no Hero */
export const stats = [
  { value: "5+", label: "Plataformas SaaS desenvolvidas" },
  { value: "4", label: "Mercados: saúde, gov, fintech, comunicação" },
  { value: "Full-Stack", label: "Do banco de dados ao deploy" },
];

/* Ticker de tecnologias que roda no Hero */
export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "PWA",
  "Supabase",
  "PostgreSQL",
  "Row Level Security",
  "Cloudflare Pages",
  "Cloudflare Workers",
  "WebRTC",
  "Gemini API",
  "Mistral AI",
  "Orquestração por IA",
  "Automação orientada a eventos",
];

/* ------------------------------------------------------------------ *
 * PROJETO CARRO-CHEFE — ProntuIA
 * ------------------------------------------------------------------ */
export const flagship = {
  name: "ProntuIA",
  url: "https://prontuia.com.br",
  category: "HealthTech · SaaS Premium",
  tagline: "Telemedicina e gestão clínica de alto nível",
  description:
    "Um ecossistema SaaS completo e premium para a gestão integrada de clínicas médicas e profissionais de saúde. Une prontuário, agenda, atendimento digital e telemedicina em tempo real numa experiência fluida, rápida e sem atrito — pensada para lidar com informações sensíveis com performance e integridade.",
  highlights: [
    {
      title: "Modelagem de dados sensíveis",
      text: "Estruturação complexa de banco relacional com foco em performance e integridade de dados clínicos.",
    },
    {
      title: "UI/UX padrão premium",
      text: "Interfaces refinadas que garantem fluxos rápidos e sem atrito para profissionais de saúde.",
    },
    {
      title: "Telemedicina em tempo real",
      text: "Integração de ferramentas clínicas e módulos de atendimento digital por vídeo.",
    },
  ],
  stack: ["Next.js", "TypeScript", "Supabase", "WebRTC", "Row Level Security"],
};

/* ------------------------------------------------------------------ *
 * GALERIA DE PROJETOS
 * (ProntuIA também entra no topo, com featured: true)
 * ------------------------------------------------------------------ */
export type Project = {
  name: string;
  tagline: string;
  category: string;
  description: string;
  focus: string[];
  stack: string[];
  url?: string;
  icon: LucideIcon;
  accent: "amber" | "emerald";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "ProntuIA",
    tagline: "Telemedicina e gestão clínica de alto nível",
    category: "HealthTech · SaaS Premium",
    description:
      "Ecossistema SaaS premium para gestão integrada de clínicas e profissionais de saúde, com telemedicina em tempo real, prontuário e UI/UX refinada para dados sensíveis.",
    focus: [
      "Modelagem de banco relacional para dados clínicos sensíveis",
      "Interfaces premium com fluxos rápidos e sem atrito",
      "Telemedicina e atendimento digital em tempo real",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "WebRTC"],
    url: "https://prontuia.com.br",
    icon: Stethoscope,
    accent: "emerald",
    featured: true,
  },
  {
    name: "AutoPro",
    tagline: "Automação de processos e escala comercial",
    category: "MarTech · Automação",
    description:
      "Engenharia de software voltada à automação de tarefas repetitivas e a fluxos de trabalho inteligentes orientados a eventos, com integração massiva de APIs para engajamento e escala de negócios.",
    focus: [
      "Fluxos de trabalho inteligentes orientados a eventos",
      "Automação de tarefas repetitivas em escala",
      "Integração massiva de APIs de terceiros",
    ],
    stack: ["Node.js", "Automação", "Integração de APIs", "Supabase"],
    url: "https://autopro.vittalix.com.br",
    icon: Workflow,
    accent: "amber",
  },
  {
    name: "Pulse Voice",
    tagline: "Áudio em tempo real para gamers",
    category: "Real-Time Audio · WebRTC",
    description:
      "Plataforma de comunicação por voz para o público gamer com implementação avançada de WebRTC para áudio de alta fidelidade e baixa latência — onde minha bagagem de redes vira código moderno. Com pipeline de releases e deploy contínuo via GitHub.",
    focus: [
      "WebRTC para áudio de alta fidelidade e baixa latência",
      "Automação de releases e CI/CD via GitHub",
      "Redes e comunicação em tempo real aplicadas em software",
    ],
    stack: ["WebRTC", "React", "Node.js", "CI/CD"],
    url: "https://pulsevoice.com.br",
    icon: AudioLines,
    accent: "amber",
  },
  {
    name: "ZeroCut",
    tagline: "Gestão mobile-first para barbearias",
    category: "FinTech · PWA",
    description:
      "PWA otimizado para dispositivos móveis com agendamentos em tempo real, controle rígido de inventário e módulos de fluxo financeiro e pagamentos — experiência de app nativo direto do navegador.",
    focus: [
      "PWA mobile-first instalável, com cara de app nativo",
      "Agendamentos em tempo real e controle de inventário",
      "Fluxo financeiro e pagamentos integrados",
    ],
    stack: ["PWA", "React", "Service Workers", "Pagamentos"],
    icon: Scissors,
    accent: "emerald",
  },
  {
    name: "Protocolia",
    tagline: "Gestão eletrônica de documentos públicos",
    category: "GovTech · GED",
    description:
      "Arquitetura de software para sistemas governamentais focada em auditoria de documentos municipais e conformidade com regras complexas de processos licitatórios.",
    focus: [
      "Gestão eletrônica de documentos (GED) municipais",
      "Trilha de auditoria e conformidade de processos",
      "Regras complexas de fluxos licitatórios",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Assinatura Digital"],
    icon: FileSignature,
    accent: "amber",
  },
];

/* ------------------------------------------------------------------ *
 * MATRIZ DE COMPETÊNCIAS (seção Stack)
 * ------------------------------------------------------------------ */
export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "amber" | "emerald";
};

export const capabilities: Capability[] = [
  {
    title: "Core Development",
    description:
      "Engenharia Full-Stack, PWAs robustos e aplicações com foco absoluto na experiência mobile.",
    icon: Code2,
    accent: "amber",
  },
  {
    title: "Orquestração por IA (SDLC acelerado)",
    description:
      "Desenvolvimento acelerado por IA e engenharia de prompts para entregar produtos completos com velocidade e qualidade.",
    icon: BrainCircuit,
    accent: "emerald",
  },
  {
    title: "Modelos Inteligentes em produção",
    description:
      "Consumo e implementação de LLMs em nível de produção com Gemini API e Mistral AI.",
    icon: Sparkles,
    accent: "amber",
  },
  {
    title: "Backend & BaaS",
    description:
      "Modelagem relacional, dados assíncronos, autenticação e segurança (Row Level Security) com Supabase.",
    icon: Database,
    accent: "emerald",
  },
  {
    title: "Cloud, Borda & Redes",
    description:
      "Segurança de borda, otimização de tráfego, roteamento, CDN e gestão de domínios/SSL com Cloudflare (Pages/Workers).",
    icon: Cloud,
    accent: "amber",
  },
  {
    title: "Comunicação em Tempo Real",
    description:
      "WebRTC e baixa latência sustentados por entendimento profundo de redes, concorrência de pacotes e protocolos.",
    icon: Radio,
    accent: "emerald",
  },
];

/* Lista plana de tecnologias para a faixa de "stack" */
export const techStack: { name: string; icon: LucideIcon }[] = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Code2 },
  { name: "PWA", icon: Smartphone },
  { name: "Supabase", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Cloudflare", icon: Cloud },
  { name: "Gemini API", icon: Sparkles },
  { name: "Mistral AI", icon: BrainCircuit },
  { name: "WebRTC", icon: AudioLines },
  { name: "Automação", icon: Workflow },
  { name: "CI/CD", icon: GitBranch },
  { name: "Segurança de Borda", icon: ShieldCheck },
  { name: "Redes / RTC", icon: Network },
  { name: "Performance", icon: Zap },
];

/* Bagagem de fundação (rebaixada a diferencial) — usada na seção Sobre */
export const foundation = {
  title: "Fundação de rede & telecom",
  text: "Profundo entendimento de redes, latência, concorrência de pacotes e protocolos de comunicação em tempo real — derivado de experiência com VoIP, troncos SIP, URAs e ecossistemas Grandstream, SaperX e UCM. Hoje, isso é um diferencial técnico dentro do meu trabalho como desenvolvedor.",
  tags: ["VoIP", "SIP Trunk", "URA", "Grandstream", "SaperX", "UCM", "Alta disponibilidade"],
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "ProntuIA", href: "#prontuia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];
