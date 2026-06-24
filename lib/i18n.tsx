"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "pt" | "en";

/* ------------------------------------------------------------------ *
 * DICIONÁRIO COMPLETO PT / EN
 * ------------------------------------------------------------------ */
export const dict = {
  pt: {
    // Navbar
    nav: {
      about: "Sobre",
      prontuia: "ProntuIA",
      projects: "Projetos",
      tech: "Tecnologias",
      process: "Processo",
      education: "Formação",
      contact: "Contato",
      contactBtn: "Contato",
      openMenu: "Abrir menu",
    },
    // Hero
    hero: {
      available: "Disponível para novos projetos",
      role: "Desenvolvedor Full-Stack & SaaS",
      cta: "Ver projetos",
      cv: "Baixar CV",
      pitch:
        "Desenvolvedor Full-Stack focado na criação de ecossistemas SaaS complexos, aplicações mobile-first (PWAs) e soluções automatizadas de ponta a ponta.",
    },
    stats: [
      { value: "5+", label: "Plataformas SaaS desenvolvidas" },
      { value: "4", label: "Mercados: saúde, gov, fintech, comunicação" },
      { value: "Full-Stack", label: "Do banco de dados ao deploy" },
    ],
    heroChips: [
      "React", "Next.js", "TypeScript", "Supabase", "PWA", "WebRTC", "Cloudflare", "Orquestração por IA",
    ],
    // About
    about: {
      eyebrow: "Sobre",
      lead: "Eu construo ecossistemas SaaS completos — do banco de dados ao pixel final.",
      paragraphs: [
        "Sou desenvolvedor Full-Stack e fundador da Vittalix, onde projeto e desenvolvo plataformas SaaS complexas, PWAs mobile-first e soluções automatizadas de ponta a ponta. Meu trabalho vai da modelagem de dados e da arquitetura de backend até interfaces com padrão visual premium e fluxos sem atrito.",
        "Meu diferencial é a orquestração de software acelerada por IA: combino plataformas de desenvolvimento assistido e LLMs em produção com uma base de engenharia sólida para entregar produtos completos com velocidade e qualidade.",
        "Antes do desenvolvimento, atuei profundamente com infraestrutura de redes e comunicação em tempo real. Não me posiciono como profissional de telecom — mas essa bagagem virou um diferencial técnico real: entendo latência, concorrência de pacotes, segurança de borda e alta disponibilidade num nível que poucos desenvolvedores alcançam.",
      ],
      pillars: [
        { title: "Ecossistemas SaaS", text: "Plataformas completas e multinicho, da arquitetura ao deploy." },
        { title: "Mobile-first / PWA", text: "Aplicações rápidas com experiência de app nativo no navegador." },
        { title: "Orquestração por IA", text: "Desenvolvimento acelerado e LLMs em produção, com qualidade." },
      ],
      foundation: {
        title: "Fundação de rede & telecom",
        text: "Profundo entendimento de redes, latência, concorrência de pacotes e protocolos de comunicação em tempo real — derivado de experiência com VoIP, troncos SIP, URAs e ecossistemas Grandstream, SaperX e UCM. Hoje, isso é um diferencial técnico dentro do meu trabalho como desenvolvedor.",
        tags: ["VoIP", "SIP Trunk", "URA", "Grandstream", "SaperX", "UCM", "Alta disponibilidade"],
      },
    },
    // Flagship
    flagship: {
      badge: "Carro-chefe",
      sectionTitle: "O produto que define o meu trabalho",
      sectionDesc: "O ProntuIA reúne tudo o que faço de melhor: segurança de nível clínico, IA aplicada e UI/UX premium em um único SaaS.",
      visitBtn: "Visitar prontuia.com.br",
      demoLabel: "Experimente",
      demoEyebrow: "Demonstração interativa",
      demoTitle: "Não acredite — interaja com o produto",
      demoDesc: "Uma recriação fiel do ProntuIA com dados fictícios. Navegue pelo painel, faça uma consulta com SOAP e IA, explore a assinatura ICP-Brasil e converse com a Vittalis.",
      featuresEyebrow: "Recursos que diferenciam",
      tagline: "Gestão clínica com IA, do prontuário à assinatura digital",
      description: "Um ecossistema SaaS premium para clínicas e profissionais de saúde, que une teleconsulta, prontuário eletrônico, financeiro e inteligência artificial num só lugar. Arquitetura multi-tenant com isolamento rígido de dados, auditoria imutável e segurança de nível clínico — pensado para escalar sem abrir mão de privacidade.",
      features: [
        { title: "Transcrição segura de consultas", text: "Gravação com criptografia ponta-a-ponta (RSA + AES-GCM) e transcrição via Whisper-v3 — privacidade absoluta do prontuário." },
        { title: "Assinatura digital ICP-Brasil", text: "Documentos médicos assinados em PAdES e ICP-Brasil/gov.br, com certificados operados em client-side (a senha nunca trafega)." },
        { title: "Co-Piloto clínico com IA", text: "IA generativa mapeada ao CID-10 sugere diagnósticos diferenciais ao médico em tempo real." },
        { title: "Visão de exames inteligente", text: "IA multimodal extrai e analisa automaticamente fotos de exames e laudos dos pacientes." },
        { title: "Follow-up automatizado (CRM clínico)", text: "Motores de PNL conduzem a jornada de pós-consulta e o retorno do paciente com fluxos em tempo real." },
        { title: "Arquitetura multi-tenant", text: "Isolamento estrito de dados por clínica, auditoria imutável e governança pensada para escala." },
      ],
      highlights: [
        { title: "Segurança de nível clínico", text: "Criptografia ponta-a-ponta, cofre de certificados e trilha de auditoria imutável para dados sensíveis." },
        { title: "IA aplicada à medicina", text: "Apoio à decisão com CID-10, transcrição e visão computacional de exames em produção." },
        { title: "UI/UX padrão premium", text: "Interfaces refinadas e fluxos sem atrito, com tempo real do agendamento à teleconsulta." },
      ],
    },
    // Projects
    projects: {
      eyebrow: "Ecossistema",
      title: "O restante do ecossistema",
      description: "Além do ProntuIA, um portfólio de SaaS multinicho construído de ponta a ponta — cada plataforma resolve uma regra de negócio real em um mercado diferente.",
      items: [
        {
          tagline: "Gestão clínica com IA, do prontuário à assinatura digital",
          category: "HealthTech · SaaS Premium",
          description: "Ecossistema SaaS premium para clínicas, unindo teleconsulta, prontuário, financeiro e IA — com criptografia ponta-a-ponta, assinatura ICP-Brasil e arquitetura multi-tenant.",
          focus: ["Transcrição cripto ponta-a-ponta e IA clínica (CID-10)", "Assinatura digital ICP-Brasil/PAdES", "Arquitetura multi-tenant com auditoria imutável"],
        },
        {
          tagline: "Automação de processos e escala comercial",
          category: "MarTech · Automação",
          description: "Engenharia de software voltada à automação de tarefas repetitivas e a fluxos de trabalho inteligentes orientados a eventos, com integração massiva de APIs para engajamento e escala de negócios.",
          focus: ["Fluxos de trabalho inteligentes orientados a eventos", "Automação de tarefas repetitivas em escala", "Integração massiva de APIs de terceiros"],
        },
        {
          tagline: "Áudio em tempo real para gamers",
          category: "Real-Time Audio · WebRTC",
          description: "Plataforma de comunicação por voz para o público gamer com implementação avançada de WebRTC para áudio de alta fidelidade e baixa latência — onde minha bagagem de redes vira código moderno. Com pipeline de releases e deploy contínuo via GitHub.",
          focus: ["WebRTC para áudio de alta fidelidade e baixa latência", "Automação de releases e CI/CD via GitHub", "Redes e comunicação em tempo real aplicadas em software"],
        },
        {
          tagline: "Gestão mobile-first para barbearias",
          category: "FinTech · PWA",
          description: "PWA otimizado para dispositivos móveis com agendamentos em tempo real, controle rígido de inventário e módulos de fluxo financeiro e pagamentos — experiência de app nativo direto do navegador.",
          focus: ["PWA mobile-first instalável, com cara de app nativo", "Agendamentos em tempo real e controle de inventário", "Fluxo financeiro e pagamentos integrados"],
        },
        {
          tagline: "Gestão eletrônica de documentos públicos",
          category: "GovTech · GED",
          description: "Arquitetura de software para sistemas governamentais focada em auditoria de documentos municipais e conformidade com regras complexas de processos licitatórios.",
          focus: ["Gestão eletrônica de documentos (GED) municipais", "Trilha de auditoria e conformidade de processos", "Regras complexas de fluxos licitatórios"],
        },
        {
          tagline: "Site institucional e marca do ecossistema",
          category: "Institucional · Branding",
          description: "Site institucional e plataforma da minha própria empresa de tecnologia — o ponto de encontro do ecossistema, onde a identidade visual é apresentada e os produtos SaaS se conectam sob uma marca única.",
          focus: ["Identidade visual e branding do ecossistema", "Vitrine institucional dos produtos", "Performance e SEO com Next.js + Cloudflare"],
        },
      ],
    },
    // Capabilities
    capabilities: {
      eyebrow: "Tecnologias",
      title: "As ferramentas que eu domino",
      description: "Do banco de dados e da orquestração por IA à segurança de borda — o ciclo completo de um produto SaaS.",
      items: [
        { title: "Core Development", description: "Engenharia Full-Stack, PWAs robustos e aplicações com foco absoluto na experiência mobile." },
        { title: "Orquestração por IA (SDLC acelerado)", description: "Desenvolvimento acelerado por IA e engenharia de prompts para entregar produtos completos com velocidade e qualidade." },
        { title: "Modelos Inteligentes em produção", description: "Consumo e implementação de LLMs em nível de produção com Gemini API e Mistral AI." },
        { title: "Backend & BaaS", description: "Modelagem relacional, dados assíncronos, autenticação e segurança (Row Level Security) com Supabase." },
        { title: "Cloud, Borda & Redes", description: "Segurança de borda, otimização de tráfego, roteamento, CDN e gestão de domínios/SSL com Cloudflare (Pages/Workers)." },
        { title: "Comunicação em Tempo Real", description: "WebRTC e baixa latência sustentados por entendimento profundo de redes, concorrência de pacotes e protocolos." },
      ],
      techStack: [
        "React", "Next.js", "TypeScript", "PWA", "Supabase", "PostgreSQL",
        "Cloudflare", "Gemini API", "Mistral AI", "WebRTC",
        "Automação", "CI/CD", "Segurança de Borda", "Redes / RTC", "Performance",
      ],
    },
    // Process
    process: {
      eyebrow: "Processo",
      title: "Como eu trabalho",
      description: "Do problema ao produto no ar — um método claro que prioriza resolver, escalar e refinar.",
      steps: [
        { n: "01", title: "Descoberta", text: "Entendo o problema, o nicho e as regras de negócio antes de escrever qualquer linha. O que importa é resolver, não só entregar." },
        { n: "02", title: "Arquitetura", text: "Modelo os dados, defino a stack e desenho a base para escalar com segurança — multi-tenant, performance e integridade desde o início." },
        { n: "03", title: "Desenvolvimento", text: "Construo com orquestração por IA e foco em UI/UX premium. Iterações rápidas, mobile-first e qualidade de produto em cada tela." },
        { n: "04", title: "Entrega & evolução", text: "Deploy contínuo, monitoramento e refinamento. O produto vai ao ar e continua melhorando com base no uso real." },
      ],
    },
    // Education
    education: {
      eyebrow: "Formação",
      title: "Educação & certificações",
      description: "Base acadêmica em desenvolvimento de sistemas, com foco também em proteção de dados.",
      inProgress: "Em curso",
      items: [
        { type: "Graduação", title: "Análise e Desenvolvimento de Sistemas", org: "Universidade de Marília (Unimar)", period: "Último semestre · em curso" },
        { type: "Certificação", title: "Certificação em LGPD (Lei Geral de Proteção de Dados)", org: "Universidade de Marília (Unimar)", period: "Concluída" },
      ],
    },
    // Footer / Contact
    footer: {
      eyebrow: "Contato",
      title: "Vamos construir algo excepcional.",
      description: "Aberto a parcerias, projetos SaaS e oportunidades. Escreva abaixo ou use um dos canais diretos.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail",
    },
    // Contact form
    form: {
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu e-mail",
      messagePlaceholder: "Conte sobre o projeto ou a oportunidade…",
      submit: "Enviar mensagem",
      sending: "Enviando…",
      successTitle: "Mensagem enviada!",
      successDesc: "Obrigado pelo contato. Retorno o mais rápido possível.",
      error: "Não foi possível enviar agora. Tente outro canal abaixo.",
      subject: "Novo contato pelo portfólio",
      fromName: "Portfólio Guilherme Mazzo",
    },
    // Print / CV
    print: {
      back: "Voltar ao site",
      backShort: "Voltar",
      print: "Baixar / Imprimir PDF",
      printShort: "Imprimir",
    },
    // WhatsApp
    whatsapp: {
      label: "Conversar no WhatsApp",
      message: "Olá Guilherme! Vi seu portfólio e gostaria de conversar.",
    },
  },

  en: {
    nav: {
      about: "About",
      prontuia: "ProntuIA",
      projects: "Projects",
      tech: "Technologies",
      process: "Process",
      education: "Education",
      contact: "Contact",
      contactBtn: "Contact",
      openMenu: "Open menu",
    },
    hero: {
      available: "Available for new projects",
      role: "Full-Stack Developer & SaaS",
      cta: "View projects",
      cv: "Download CV",
      pitch:
        "Full-Stack developer focused on building complex SaaS ecosystems, mobile-first applications (PWAs) and end-to-end automated solutions.",
    },
    stats: [
      { value: "5+", label: "SaaS platforms built" },
      { value: "4", label: "Markets: health, gov, fintech, comms" },
      { value: "Full-Stack", label: "From database to deploy" },
    ],
    heroChips: [
      "React", "Next.js", "TypeScript", "Supabase", "PWA", "WebRTC", "Cloudflare", "AI Orchestration",
    ],
    about: {
      eyebrow: "About",
      lead: "I build complete SaaS ecosystems — from the database to the final pixel.",
      paragraphs: [
        "I'm a Full-Stack developer and founder of Vittalix, where I design and build complex SaaS platforms, mobile-first PWAs and end-to-end automated solutions. My work spans from data modeling and backend architecture to premium-grade interfaces and frictionless user flows.",
        "My edge is AI-accelerated software orchestration: I combine AI-assisted development platforms and production LLMs with a solid engineering foundation to deliver complete products with speed and quality.",
        "Before software development, I worked deeply with network infrastructure and real-time communications. I don't position myself as a telecom professional — but that background became a real technical differentiator: I understand latency, packet concurrency, edge security and high availability at a level few developers reach.",
      ],
      pillars: [
        { title: "SaaS Ecosystems", text: "Complete, multi-niche platforms, from architecture to deploy." },
        { title: "Mobile-first / PWA", text: "Fast applications with a native app experience in the browser." },
        { title: "AI Orchestration", text: "Accelerated development and production LLMs, with quality." },
      ],
      foundation: {
        title: "Network & Telecom Foundation",
        text: "Deep understanding of networks, latency, packet concurrency and real-time communication protocols — derived from experience with VoIP, SIP trunks, IVRs and Grandstream, SaperX and UCM ecosystems. Today, this is a core technical differentiator in my work as a developer.",
        tags: ["VoIP", "SIP Trunk", "IVR", "Grandstream", "SaperX", "UCM", "High Availability"],
      },
    },
    flagship: {
      badge: "Flagship",
      sectionTitle: "The product that defines my work",
      sectionDesc: "ProntuIA brings together everything I do best: clinical-grade security, applied AI and premium UI/UX in a single SaaS.",
      visitBtn: "Visit prontuia.com.br",
      demoLabel: "Try it",
      demoEyebrow: "Interactive demo",
      demoTitle: "Don't take my word for it — interact with the product",
      demoDesc: "A faithful recreation of ProntuIA with fictional data. Navigate the dashboard, run a SOAP consultation with AI, explore the ICP-Brasil signature and chat with Vittalis.",
      featuresEyebrow: "Standout features",
      tagline: "Clinical management with AI, from records to digital signature",
      description: "A premium SaaS ecosystem for clinics and healthcare professionals, combining teleconsultation, electronic health records, financials and artificial intelligence in one place. Multi-tenant architecture with strict data isolation, immutable audit trails and clinical-grade security — built to scale without compromising privacy.",
      features: [
        { title: "Secure consultation transcription", text: "End-to-end encrypted recording (RSA + AES-GCM) and transcription via Whisper-v3 — absolute record privacy." },
        { title: "ICP-Brasil digital signature", text: "Medical documents signed in PAdES and ICP-Brasil/gov.br, with certificates operated client-side (password never transmitted)." },
        { title: "AI clinical co-pilot", text: "Generative AI mapped to ICD-10 suggests differential diagnoses to the physician in real time." },
        { title: "Intelligent exam vision", text: "Multimodal AI automatically extracts and analyzes patient exam photos and reports." },
        { title: "Automated follow-up (clinical CRM)", text: "NLP engines guide the post-consultation journey and patient return with real-time flows." },
        { title: "Multi-tenant architecture", text: "Strict per-clinic data isolation, immutable audit trail and governance built for scale." },
      ],
      highlights: [
        { title: "Clinical-grade security", text: "End-to-end encryption, certificate vault and immutable audit trail for sensitive data." },
        { title: "AI applied to medicine", text: "Decision support with ICD-10, transcription and computer vision of exams in production." },
        { title: "Premium UI/UX standard", text: "Refined interfaces and frictionless flows, with real-time from scheduling to teleconsultation." },
      ],
    },
    projects: {
      eyebrow: "Ecosystem",
      title: "The rest of the ecosystem",
      description: "Beyond ProntuIA, a multi-niche SaaS portfolio built end-to-end — each platform solves a real business problem in a different market.",
      items: [
        {
          tagline: "Clinical management with AI, from records to digital signature",
          category: "HealthTech · Premium SaaS",
          description: "Premium SaaS ecosystem for clinics, combining teleconsultation, health records, financials and AI — with end-to-end encryption, ICP-Brasil signature and multi-tenant architecture.",
          focus: ["End-to-end encrypted transcription and clinical AI (ICD-10)", "ICP-Brasil/PAdES digital signature", "Multi-tenant architecture with immutable audit trail"],
        },
        {
          tagline: "Process automation and commercial scale",
          category: "MarTech · Automation",
          description: "Software engineering focused on automating repetitive tasks and intelligent event-driven workflows, with massive API integration for engagement and business scale.",
          focus: ["Intelligent event-driven workflows", "Repetitive task automation at scale", "Massive third-party API integration"],
        },
        {
          tagline: "Real-time audio for gamers",
          category: "Real-Time Audio · WebRTC",
          description: "Voice communication platform for the gaming audience with advanced WebRTC implementation for high-fidelity, low-latency audio — where my network background turns into modern code. With release pipeline and continuous deployment via GitHub.",
          focus: ["WebRTC for high-fidelity, low-latency audio", "Release automation and CI/CD via GitHub", "Real-time networking and communication applied in software"],
        },
        {
          tagline: "Mobile-first management for barbershops",
          category: "FinTech · PWA",
          description: "Mobile-optimized PWA with real-time scheduling, strict inventory control and financial flow and payment modules — native app experience straight from the browser.",
          focus: ["Installable mobile-first PWA with native app feel", "Real-time scheduling and inventory control", "Integrated financial flow and payments"],
        },
        {
          tagline: "Electronic management of public documents",
          category: "GovTech · DMS",
          description: "Software architecture for government systems focused on municipal document auditing and compliance with complex bidding process rules.",
          focus: ["Municipal electronic document management (DMS)", "Audit trail and process compliance", "Complex bidding workflow rules"],
        },
        {
          tagline: "Corporate website and ecosystem brand",
          category: "Corporate · Branding",
          description: "Corporate website and platform for my own technology company — the ecosystem's meeting point, where the visual identity is showcased and SaaS products connect under a single brand.",
          focus: ["Visual identity and ecosystem branding", "Institutional product showcase", "Performance and SEO with Next.js + Cloudflare"],
        },
      ],
    },
    capabilities: {
      eyebrow: "Technologies",
      title: "The tools I master",
      description: "From database and AI orchestration to edge security — the complete cycle of a SaaS product.",
      items: [
        { title: "Core Development", description: "Full-Stack engineering, robust PWAs and applications with an absolute focus on mobile experience." },
        { title: "AI Orchestration (accelerated SDLC)", description: "AI-accelerated development and prompt engineering to deliver complete products with speed and quality." },
        { title: "Production Intelligence Models", description: "Consumption and implementation of production-grade LLMs with Gemini API and Mistral AI." },
        { title: "Backend & BaaS", description: "Relational modeling, async data, authentication and security (Row Level Security) with Supabase." },
        { title: "Cloud, Edge & Networks", description: "Edge security, traffic optimization, routing, CDN and domain/SSL management with Cloudflare (Pages/Workers)." },
        { title: "Real-Time Communication", description: "WebRTC and low latency backed by deep understanding of networks, packet concurrency and protocols." },
      ],
      techStack: [
        "React", "Next.js", "TypeScript", "PWA", "Supabase", "PostgreSQL",
        "Cloudflare", "Gemini API", "Mistral AI", "WebRTC",
        "Automation", "CI/CD", "Edge Security", "Networks / RTC", "Performance",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How I work",
      description: "From problem to live product — a clear method that prioritizes solving, scaling and refining.",
      steps: [
        { n: "01", title: "Discovery", text: "I understand the problem, the niche and the business rules before writing a single line. What matters is solving, not just delivering." },
        { n: "02", title: "Architecture", text: "I model data, define the stack and design the foundation to scale safely — multi-tenant, performance and integrity from the start." },
        { n: "03", title: "Development", text: "I build with AI orchestration and a focus on premium UI/UX. Fast iterations, mobile-first and product quality on every screen." },
        { n: "04", title: "Delivery & evolution", text: "Continuous deployment, monitoring and refinement. The product goes live and keeps improving based on real usage." },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Education & certifications",
      description: "Academic background in systems development, with a focus on data protection as well.",
      inProgress: "In progress",
      items: [
        { type: "Degree", title: "Systems Analysis and Development", org: "University of Marília (Unimar)", period: "Final semester · in progress" },
        { type: "Certification", title: "LGPD Certification (Brazilian General Data Protection Law)", org: "University of Marília (Unimar)", period: "Completed" },
      ],
    },
    footer: {
      eyebrow: "Contact",
      title: "Let's build something exceptional.",
      description: "Open to partnerships, SaaS projects and opportunities. Write below or use one of the direct channels.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "E-mail",
    },
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "Your e-mail",
      messagePlaceholder: "Tell me about the project or opportunity…",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent!",
      successDesc: "Thanks for reaching out. I'll get back to you as soon as possible.",
      error: "Could not send right now. Try another channel below.",
      subject: "New contact from portfolio",
      fromName: "Guilherme Mazzo Portfolio",
    },
    print: {
      back: "Back to site",
      backShort: "Back",
      print: "Download / Print PDF",
      printShort: "Print",
    },
    whatsapp: {
      label: "Chat on WhatsApp",
      message: "Hello Guilherme! I saw your portfolio and would like to talk.",
    },
  },
};

export type Dict = typeof dict.pt;

/* ------------------------------------------------------------------ *
 * CONTEXTO
 * ------------------------------------------------------------------ */
type I18nCtx = { locale: Locale; t: Dict; setLocale: (l: Locale) => void };

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  return (
    <I18nContext.Provider value={{ locale, t: dict[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
