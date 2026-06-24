/* Dados 100% fictícios para o mini-demo interativo do ProntuIA.
   Estruturados para refletir as telas reais do produto. Nada aqui é real. */

import {
  Activity,
  BarChart3,
  Boxes,
  CalendarDays,
  CreditCard,
  FileSignature,
  FlaskConical,
  Home,
  LifeBuoy,
  type LucideIcon,
  Megaphone,
  MessageSquare,
  Receipt,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";

/* Itens da sidebar real (uma seleção representativa) */
export const demoSidebar: { label: string; icon: LucideIcon; badge?: string }[] = [
  { label: "Início", icon: Home },
  { label: "Mural da Equipe", icon: Megaphone },
  { label: "Agenda", icon: CalendarDays, badge: "2" },
  { label: "Pacientes", icon: Users },
  { label: "Especialistas", icon: Stethoscope },
  { label: "Relatórios", icon: BarChart3 },
  { label: "Vittalis IA", icon: Sparkles },
  { label: "Faturamento TISS", icon: Receipt },
  { label: "Financeiro", icon: Wallet },
  { label: "Estoque", icon: Boxes },
  { label: "Cobranças", icon: CreditCard },
  { label: "Lembretes WA", icon: MessageSquare },
  { label: "Laboratórios", icon: FlaskConical },
  { label: "Assinatura", icon: FileSignature },
  { label: "Suporte", icon: LifeBuoy },
];

/* ---------------- DASHBOARD (tela "Início") ---------------- */
export const demoExecSummary =
  "Hoje temos 2 consultas (sendo 1 primeira vez). A receita projetada do dia é R$ 35.000,00. Atenção: 1 consulta cancelada aguardando revisão.";

export const demoMetrics = [
  { label: "Consultas", value: "4", sub: "sem. anterior: 4", icon: CalendarDays, trend: "0%" },
  { label: "Em espera", value: "0", sub: "sem. anterior: 0", icon: Activity, trend: "0%" },
  { label: "Em atendimento", value: "2", sub: "sem. anterior: 3", icon: Stethoscope, trend: "-33%" },
  { label: "Faturamento", value: "R$ 35k", sub: "projeção do dia", icon: Wallet, trend: "+12%" },
];

export const demoNextPatients = [
  { initials: "GO", name: "Guilherme Oliveira", info: "Cardiologia · 08:30", status: "Atendimento" },
  { initials: "MA", name: "Marina Alves", info: "Clínico geral · 10:00", status: "Confirmado" },
];

/* ---------------- CONSULTA / SOAP ---------------- */
export const demoConsult = {
  patient: { name: "Guilherme Oliveira", age: 28, sex: "M", plan: "Particular", initials: "GO" },
  timer: "00:15",
  vitals: [
    { label: "Pressão arterial", value: "120/80" },
    { label: "Saturação O₂", value: "98%" },
  ],
  soap: [
    { key: "S", title: "Subjetivo", placeholder: "Queixas, sintomas e histórico relatado…", filled: "Cefaleia pulsátil há 8 dias, fotofobia e náusea associadas." },
    { key: "O", title: "Objetivo", placeholder: "Exame físico, sinais vitais e achados…", filled: "PA 120/80, afebril, sem sinais neurológicos focais." },
    { key: "A", title: "Avaliação", placeholder: "Diagnóstico, hipóteses e CID-10…", filled: "" },
    { key: "P", title: "Plano", placeholder: "Conduta, prescrição e orientações…", filled: "" },
  ],
};

export const demoDifferentials = [
  { cid: "G43.0", name: "Enxaqueca sem aura", confidence: 87 },
  { cid: "G44.2", name: "Cefaleia tensional", confidence: 54 },
  { cid: "R51", name: "Cefaleia não especificada", confidence: 31 },
];

/* ---------------- ASSINATURA ICP-BRASIL ---------------- */
export const demoSigning = {
  steps: ["Certificado", "Documento", "Posição", "Assinar"],
  cert: "vittalix_test_cert.p12",
  modes: ["Cofre Vittalix", "Usar pendrive", "Private hash"],
  adoption: [
    { label: "Vittalis Private", value: 0 },
    { label: "ICP-Brasil / Gov.br", value: 100 },
  ],
  totalSignatures: 12,
};

/* ---------------- VITTALIS (assistente IA) ---------------- */
export const demoVittalisQuestion =
  "Qual a dosagem máxima indicada para um paciente com enxaqueca há mais de 1 semana?";

export const demoVittalisAnswer = [
  { type: "h", text: "Tratamento para enxaqueca" },
  { type: "b", text: "Medicamentos comuns:" },
  { type: "li", text: "Triptanas" },
  { type: "li", text: "Anti-inflamatórios (AINEs)" },
  { type: "li", text: "Corticosteroides (casos refratários)" },
  { type: "b", text: "Dosagem máxima (exemplos):" },
  { type: "li", text: "Sumatriptana: 100mg/dose, máx. 200–300mg em 24h" },
  { type: "li", text: "Ibuprofeno: 400mg/dose, máx. 1200mg em 24h" },
  { type: "note", text: "Importante: consulte sempre a avaliação clínica individual do paciente." },
];

export const demoVittalisChips = ["Sugerir diagnóstico", "Interações", "Resumo do paciente"];
