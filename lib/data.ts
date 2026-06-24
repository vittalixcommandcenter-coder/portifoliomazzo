import {
  Car,
  FileSignature,
  Stethoscope,
  AudioLines,
  Scissors,
  Boxes,
  Building2,
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
  // Página de currículo imprimível (botão "Baixar CV" abre /cv)
  cv: "/cv",
  site: "https://mazzo.vittalix.com.br",
};

/* Formação acadêmica e certificações */
export const education = [
  {
    type: "Graduação",
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Universidade de Marília (Unimar)",
    period: "Último semestre · em curso",
    url: "https://portal.unimar.br/",
    current: true,
  },
  {
    type: "Certificação",
    title: "Certificação em LGPD (Lei Geral de Proteção de Dados)",
    org: "Universidade de Marília (Unimar)",
    period: "Concluída",
    url: "https://portal.unimar.br/",
    current: false,
  },
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/guilhermemazzoo/",
  github: "https://github.com/vittalixcommandcenter-coder",
  email: "guilhermazzo@gmail.com",
};

/* Site da empresa (marca) */
export const company = {
  name: "Vittalix",
  url: "https://vittalix.com.br",
};

/* ------------------------------------------------------------------ *
 * CONFIGURAÇÃO — preencha estes dois campos
 * ------------------------------------------------------------------ */
export const config = {
  // WhatsApp: número completo com DDI e DDD, só dígitos (ex: 5518999998888)
  whatsapp: "5518000000000", // TODO: troque pelo seu número real
  whatsappMessage: "Olá Guilherme! Vi seu portfólio e gostaria de conversar.",
  // Web3Forms: crie grátis em https://web3forms.com (leva 30s) e cole a access key
  web3formsKey: "SUA_ACCESS_KEY_AQUI", // TODO: troque pela sua key do Web3Forms
  // Cloudflare Web Analytics: cole o token do beacon (Dash > Web Analytics)
  cfAnalyticsToken: "", // opcional; deixe vazio se não usar
};

/* "Como eu trabalho" — etapas do processo */
export const processSteps = [
  {
    n: "01",
    title: "Descoberta",
    text: "Entendo o problema, o nicho e as regras de negócio antes de escrever qualquer linha. O que importa é resolver, não só entregar.",
  },
  {
    n: "02",
    title: "Arquitetura",
    text: "Modelo os dados, defino a stack e desenho a base para escalar com segurança — multi-tenant, performance e integridade desde o início.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    text: "Construo com orquestração por IA e foco em UI/UX premium. Iterações rápidas, mobile-first e qualidade de produto em cada tela.",
  },
  {
    n: "04",
    title: "Entrega & evolução",
    text: "Deploy contínuo, monitoramento e refinamento. O produto vai ao ar e continua melhorando com base no uso real.",
  },
];

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

/* Chips de stack estáticos exibidos no rodapé do Hero (seleção curta) */
export const heroChips = [
  "React",
  "Next.js",
  "TypeScript",
  "Supabase",
  "PWA",
  "WebRTC",
  "Cloudflare",
  "Orquestração por IA",
];

/* ------------------------------------------------------------------ *
 * PROJETO CARRO-CHEFE — ProntuIA
 * ------------------------------------------------------------------ */
export const flagship = {
  name: "ProntuIA",
  url: "https://prontuia.com.br",
  category: "HealthTech · SaaS Premium",
  tagline: "Gestão clínica com IA, do prontuário à assinatura digital",
  description:
    "Um ecossistema SaaS premium para clínicas e profissionais de saúde, que une teleconsulta, prontuário eletrônico, financeiro e inteligência artificial num só lugar. Arquitetura multi-tenant com isolamento rígido de dados, auditoria imutável e segurança de nível clínico — pensado para escalar sem abrir mão de privacidade.",
  // Recursos premium (diferenciais reais, sem expor internals sensíveis)
  features: [
    {
      title: "Transcrição segura de consultas",
      text: "Gravação com criptografia ponta-a-ponta (RSA + AES-GCM) e transcrição via Whisper-v3 — privacidade absoluta do prontuário.",
    },
    {
      title: "Assinatura digital ICP-Brasil",
      text: "Documentos médicos assinados em PAdES e ICP-Brasil/gov.br, com certificados operados em client-side (a senha nunca trafega).",
    },
    {
      title: "Co-Piloto clínico com IA",
      text: "IA generativa mapeada ao CID-10 sugere diagnósticos diferenciais ao médico em tempo real.",
    },
    {
      title: "Visão de exames inteligente",
      text: "IA multimodal extrai e analisa automaticamente fotos de exames e laudos dos pacientes.",
    },
    {
      title: "Follow-up automatizado (CRM clínico)",
      text: "Motores de PNL conduzem a jornada de pós-consulta e o retorno do paciente com fluxos em tempo real.",
    },
    {
      title: "Arquitetura multi-tenant",
      text: "Isolamento estrito de dados por clínica, auditoria imutável e governança pensada para escala.",
    },
  ],
  // Os 3 pilares de competência (resumo de alto nível)
  highlights: [
    {
      title: "Segurança de nível clínico",
      text: "Criptografia ponta-a-ponta, cofre de certificados e trilha de auditoria imutável para dados sensíveis.",
    },
    {
      title: "IA aplicada à medicina",
      text: "Apoio à decisão com CID-10, transcrição e visão computacional de exames em produção.",
    },
    {
      title: "UI/UX padrão premium",
      text: "Interfaces refinadas e fluxos sem atrito, com tempo real do agendamento à teleconsulta.",
    },
  ],
  stack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Supabase",
    "Edge Functions",
    "Tailwind",
    "Framer Motion",
  ],
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
    tagline: "Gestão clínica com IA, do prontuário à assinatura digital",
    category: "HealthTech · SaaS Premium",
    description:
      "Ecossistema SaaS premium para clínicas, unindo teleconsulta, prontuário, financeiro e IA — com criptografia ponta-a-ponta, assinatura ICP-Brasil e arquitetura multi-tenant.",
    focus: [
      "Transcrição cripto ponta-a-ponta e IA clínica (CID-10)",
      "Assinatura digital ICP-Brasil/PAdES",
      "Arquitetura multi-tenant com auditoria imutável",
    ],
    stack: ["React 18", "TypeScript", "Supabase", "Edge Functions"],
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
    url: "https://zerocut.vittalix.com.br",
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
  {
    name: "Vittalix",
    tagline: "Site institucional e marca do ecossistema",
    category: "Institucional · Branding",
    description:
      "Site institucional e plataforma da minha própria empresa de tecnologia — o ponto de encontro do ecossistema, onde a identidade visual é apresentada e os produtos SaaS se conectam sob uma marca única.",
    focus: [
      "Identidade visual e branding do ecossistema",
      "Vitrine institucional dos produtos",
      "Performance e SEO com Next.js + Cloudflare",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    url: "https://vittalix.com.br",
    icon: Building2,
    accent: "emerald",
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
  { label: "Tecnologias", href: "#stack" },
  { label: "Processo", href: "#processo" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];
