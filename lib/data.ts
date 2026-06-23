import {
  Car,
  LayoutDashboard,
  FileSignature,
  Stethoscope,
  AudioLines,
  Scissors,
  Building2,
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
  // Enquanto o arquivo não existir, o componente cai no placeholder SVG.
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

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Founder & CEO",
    company: "Vittalix",
    period: "Atualmente",
    current: true,
    description:
      "Liderança no desenvolvimento de ecossistemas tecnológicos, plataformas SaaS exclusivas e branding. Direção de produto, arquitetura e identidade visual de ponta a ponta.",
    tags: ["SaaS", "IA", "Branding", "Liderança", "Produto"],
  },
  {
    role: "Especialista em Infraestrutura de TI e VoIP",
    company: "Anterior",
    period: "Trajetória",
    description:
      "Gestão e desenvolvimento de infraestrutura de comunicação: URAs, SIP trunks e sistemas Grandstream, SaperX e UCM. Operação crítica de telefonia e redes em ambientes de alta disponibilidade.",
    tags: ["VoIP", "SIP Trunk", "URA", "Grandstream", "UCM", "SaperX"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  accent: "amber" | "emerald";
};

export const projects: Project[] = [
  {
    name: "Auto Pro",
    description:
      "Sistema completo de gestão de funilarias com IA integrada para análise de avarias e geração automática de orçamentos. Inclui gestão de caixa, pátio e controle de clientes.",
    tags: ["IA", "Gestão", "Orçamentos", "Automotivo"],
    icon: Car,
    accent: "amber",
  },
  {
    name: "Command Center",
    description:
      "Plataforma interna de gestão no estilo Monday.com. Conta com gerador de diagramas, gerenciador e cofre de senhas, e painel de controle de chaves de APIs de IA.",
    tags: ["Workspace", "Cofre de Senhas", "APIs de IA", "Diagramas"],
    icon: LayoutDashboard,
    accent: "emerald",
  },
  {
    name: "Protocolia",
    description:
      "Sistema governamental para prefeituras focado em protocolos, digitalização de documentos e integração com assinatura digital.",
    tags: ["GovTech", "Documentos", "Assinatura Digital"],
    icon: FileSignature,
    accent: "amber",
  },
  {
    name: "ProntuIA",
    description:
      "Plataforma SaaS premium para gestão de clínicas médicas e telemedicina, com automação e UI/UX refinada.",
    tags: ["HealthTech", "Telemedicina", "SaaS", "UX Premium"],
    icon: Stethoscope,
    accent: "emerald",
  },
  {
    name: "Pulse Voice",
    description:
      "Plataforma de comunicação de áudio de alta fidelidade via WebRTC focada no público gamer — incluindo o desenvolvimento de seu site oficial.",
    tags: ["WebRTC", "Áudio HD", "Gaming", "Real-time"],
    icon: AudioLines,
    accent: "amber",
  },
  {
    name: "ZeroCut",
    description:
      "Sistema PWA de gestão focado em barbearias, com controle de estoque, agenda e pagamentos.",
    tags: ["PWA", "Agenda", "Estoque", "Pagamentos"],
    icon: Scissors,
    accent: "emerald",
  },
  {
    name: "Vittalix",
    description:
      "Site institucional e plataforma da minha própria empresa de tecnologia e branding.",
    tags: ["Institucional", "Branding", "Plataforma"],
    icon: Building2,
    accent: "amber",
  },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
