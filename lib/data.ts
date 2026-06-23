import {
  Car,
  LayoutDashboard,
  FileSignature,
  Stethoscope,
  AudioLines,
  Scissors,
  Building2,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Network,
  Palette,
  PhoneCall,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * CONTEÚDO CENTRALIZADO
 * Edite tudo por aqui — as seções consomem estes dados.
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Guilherme Augusto Mazzo",
  shortName: "Guilherme Mazzo",
  title:
    "Founder & CEO da Vittalix | Especialista em Infraestrutura de TI, VoIP e Desenvolvimento SaaS com IA.",
  // Coloque sua foto em /public/profile.jpg (já apontado abaixo).
  photo: "/profile.jpg",
  photoFallback: "/profile.svg",
  // Coloque seu currículo em /public/cv.pdf
  cv: "/cv.pdf",
  about:
    "Especialista em Infraestrutura de TI e VoIP em transição focada para o empreendedorismo, a orquestração de IA e o desenvolvimento de ecossistemas SaaS de alto impacto. Atuo na ponte entre a engenharia de comunicação robusta e produtos digitais sofisticados, criando soluções sob medida para diferentes nichos — saúde, governo e serviços automotivos.",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/guilhermemazzoo/",
  github: "https://github.com/vittalixcommandcenter-coder",
  email: "guilhermazzo@gmail.com",
};

/* Estatísticas rápidas exibidas no Hero */
export const stats = [
  { value: "7+", label: "Plataformas SaaS construídas" },
  { value: "3", label: "Nichos atendidos: saúde, gov, serviços" },
  { value: "100%", label: "Da infraestrutura ao produto final" },
];

/* Ticker de tecnologias que roda no Hero */
export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "WebRTC",
  "PostgreSQL",
  "Orquestração de IA",
  "VoIP / SIP",
  "Grandstream",
  "PWA",
  "Asterisk / UCM",
  "Branding",
  "Cloudflare",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Founder & CEO",
    company: "Vittalix",
    period: "Atualmente",
    current: true,
    description:
      "Fundei a Vittalix para transformar conhecimento técnico profundo em produtos digitais sofisticados. Lidero a estratégia, a arquitetura e a identidade visual de um portfólio inteiro de plataformas SaaS exclusivas.",
    highlights: [
      "Direção de produto e arquitetura de ponta a ponta em múltiplos SaaS",
      "Orquestração de IA aplicada a casos de uso reais (orçamentos, análise, automação)",
      "Branding e identidade visual coesa entre todos os produtos",
    ],
    tags: ["SaaS", "IA", "Branding", "Liderança", "Produto", "Arquitetura"],
  },
  {
    role: "Especialista em Infraestrutura de TI e VoIP",
    company: "Trajetória técnica",
    period: "Base de carreira",
    description:
      "Anos operando comunicação crítica e infraestrutura de alta disponibilidade. Essa base de engenharia robusta é o que sustenta a confiabilidade dos produtos que construo hoje.",
    highlights: [
      "Implantação e gestão de URAs, SIP trunks e roteamento de chamadas",
      "Operação de sistemas Grandstream, SaperX e UCM em ambientes críticos",
      "Redes, telefonia IP e troubleshooting de comunicação em produção",
    ],
    tags: ["VoIP", "SIP Trunk", "URA", "Grandstream", "UCM", "SaperX", "Redes"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  icon: LucideIcon;
  accent: "amber" | "emerald";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Auto Pro",
    tagline: "Gestão inteligente para funilarias",
    category: "IA · Automotivo",
    description:
      "ERP completo para funilarias que usa IA para acelerar o que mais consome tempo no setor: avaliar avarias e montar orçamentos. A oficina fotografa o dano, a IA analisa e o sistema gera o orçamento — enquanto o financeiro, o pátio e os clientes ficam todos sob controle em um só lugar.",
    features: [
      "IA para análise de avarias a partir de fotos do veículo",
      "Geração automática de orçamentos a partir do laudo",
      "Gestão de caixa, fluxo financeiro e fechamento diário",
      "Controle de pátio: entrada, etapas de reparo e saída",
      "Cadastro e histórico completo de clientes e veículos",
    ],
    stack: ["React", "Node.js", "IA / Visão", "PostgreSQL"],
    icon: Car,
    accent: "amber",
    featured: true,
  },
  {
    name: "Command Center",
    tagline: "O cockpit interno da operação",
    category: "Workspace · Produtividade",
    description:
      "Plataforma de gestão interna no espírito do Monday.com, mas desenhada para um time de tecnologia. Centraliza projetos, segredos e infraestrutura num único painel — incluindo um cofre de senhas e o controle de todas as chaves de API de IA usadas pelos produtos.",
    features: [
      "Quadros e gestão de projetos no estilo Monday.com",
      "Gerador de diagramas para arquitetura e fluxos",
      "Cofre de senhas com gerenciamento de credenciais",
      "Painel central de chaves de APIs de IA",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare"],
    icon: LayoutDashboard,
    accent: "emerald",
  },
  {
    name: "Protocolia",
    tagline: "GovTech para prefeituras",
    category: "Governo · Documentos",
    description:
      "Sistema para a administração pública que moderniza o protocolo municipal: documentos deixam de circular em papel e passam a ser digitalizados, rastreados e assinados eletronicamente, com trilha de auditoria do início ao fim.",
    features: [
      "Gestão e tramitação de protocolos municipais",
      "Digitalização e organização de documentos",
      "Integração com assinatura digital",
      "Rastreabilidade e trilha de auditoria",
    ],
    stack: ["React", "Node.js", "Assinatura Digital", "PostgreSQL"],
    icon: FileSignature,
    accent: "amber",
  },
  {
    name: "ProntuIA",
    tagline: "Clínicas e telemedicina premium",
    category: "HealthTech · SaaS",
    description:
      "SaaS premium para gestão de clínicas e telemedicina, onde a experiência importa tanto quanto a função. Une prontuário, agenda, atendimento por vídeo e automações em uma interface refinada, pensada para reduzir cliques e elevar a percepção de qualidade da clínica.",
    features: [
      "Gestão completa de clínicas e prontuário eletrônico",
      "Telemedicina com atendimento por vídeo",
      "Automação de fluxos e rotinas administrativas",
      "UI/UX refinada, com foco em experiência do profissional",
    ],
    stack: ["Next.js", "TypeScript", "WebRTC", "Automação"],
    icon: Stethoscope,
    accent: "emerald",
    featured: true,
  },
  {
    name: "Pulse Voice",
    tagline: "Áudio de alta fidelidade para gamers",
    category: "WebRTC · Real-time",
    description:
      "Plataforma de comunicação por voz via WebRTC pensada para o público gamer, onde latência e qualidade de áudio são tudo. Aproveita minha base em VoIP para entregar conversas em alta fidelidade — incluindo o desenvolvimento do site oficial da marca.",
    features: [
      "Comunicação de voz em tempo real via WebRTC",
      "Áudio de alta fidelidade com baixa latência",
      "Experiência sob medida para comunidades gamer",
      "Site oficial e identidade da plataforma",
    ],
    stack: ["WebRTC", "React", "Node.js", "Áudio HD"],
    icon: AudioLines,
    accent: "amber",
  },
  {
    name: "ZeroCut",
    tagline: "Barbearias na palma da mão",
    category: "PWA · Serviços",
    description:
      "Sistema PWA para barbearias que funciona como app sem precisar de loja: instala direto do navegador. Concentra agenda, estoque e pagamentos para que o barbeiro foque no cliente, não na planilha.",
    features: [
      "PWA instalável, com experiência de app nativo",
      "Agenda de horários e gestão de atendimentos",
      "Controle de estoque de produtos",
      "Pagamentos integrados",
    ],
    stack: ["PWA", "React", "Service Workers", "Pagamentos"],
    icon: Scissors,
    accent: "emerald",
  },
  {
    name: "Vittalix",
    tagline: "A casa da marca",
    category: "Institucional · Branding",
    description:
      "Site institucional e plataforma da minha própria empresa de tecnologia e branding — o ponto de encontro entre todos os produtos. É onde a identidade visual do ecossistema é apresentada e onde os SaaS se conectam sob uma marca única.",
    features: [
      "Identidade visual e branding do ecossistema",
      "Vitrine institucional dos produtos",
      "Ponto de entrada para as plataformas Vittalix",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Branding"],
    icon: Building2,
    accent: "amber",
  },
];

/* Áreas de atuação técnica (seção Stack & Capacidades) */
export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "amber" | "emerald";
};

export const capabilities: Capability[] = [
  {
    title: "Desenvolvimento Full-Stack",
    description:
      "Produtos do front ao back: React, Next.js, TypeScript e Node.js com UI/UX cuidada.",
    icon: Code2,
    accent: "amber",
  },
  {
    title: "Orquestração de IA",
    description:
      "Integração de IA em fluxos reais — análise, geração de conteúdo e automação de processos.",
    icon: BrainCircuit,
    accent: "emerald",
  },
  {
    title: "Infraestrutura & VoIP",
    description:
      "SIP trunks, URAs, Grandstream, UCM e redes — comunicação crítica de alta disponibilidade.",
    icon: PhoneCall,
    accent: "amber",
  },
  {
    title: "Arquitetura SaaS",
    description:
      "Multi-tenant, escalabilidade e estrutura de dados pensadas para crescer com segurança.",
    icon: Layers,
    accent: "emerald",
  },
  {
    title: "Branding & Design",
    description:
      "Identidade visual coesa e interfaces sofisticadas que elevam a percepção do produto.",
    icon: Palette,
    accent: "amber",
  },
  {
    title: "Cloud & Deploy",
    description:
      "Cloudflare, ambientes de produção e pipelines de entrega contínua.",
    icon: Cloud,
    accent: "emerald",
  },
];

/* Lista plana de tecnologias para a faixa de "stack" */
export const techStack: { name: string; icon: LucideIcon }[] = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Tailwind", icon: Palette },
  { name: "PostgreSQL", icon: Database },
  { name: "WebRTC", icon: AudioLines },
  { name: "VoIP / SIP", icon: PhoneCall },
  { name: "IA", icon: Cpu },
  { name: "Automação", icon: Workflow },
  { name: "Cloudflare", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "Redes", icon: Network },
  { name: "Segurança", icon: ShieldCheck },
  { name: "PWA", icon: Boxes },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
