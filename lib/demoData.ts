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

/* ---------------- AGENDA ---------------- */
export const demoAgendaSlots = [
  { time: "08:30", patient: "Guilherme Oliveira", spec: "Cardiologia", tag: "Particular", status: "Atendimento", pay: "Confirmado", value: "R$ 35.000,00", initials: "GO" },
];

export const demoAgendaSpecialists = [
  { name: "Todos os médicos", sub: "Visão geral", initials: "TM", active: true },
  { name: "Dr. João Santos", sub: "Cardiologia", initials: "J" },
  { name: "Dra. Ana Lima", sub: "Ortopedia", initials: "A" },
  { name: "Dr. Pedro Mendes", sub: "Dermatologia", initials: "P" },
  { name: "Dra. Lúcia Ferreira", sub: "Clínico geral", initials: "L" },
];

export const demoAgendaStatuses = [
  { label: "Todos", count: 2, color: "#7c5cff" },
  { label: "Agendados", count: 0, color: "#94a3b8" },
  { label: "Em espera", count: 0, color: "#f59e0b" },
  { label: "Atendimento", count: 1, color: "#10b981" },
  { label: "Concluídos", count: 0, color: "#64748b" },
];

/* ---------------- MURAL DA EQUIPE ---------------- */
export const demoMural = {
  post: {
    author: "Guilherme Mazzo",
    date: "15 de jun. de 2026",
    title: "7 de setembro",
    badge: "Aviso de feriado",
    body: "Informamos que a clínica estará fechada no dia 07/09 (segunda-feira) devido ao feriado nacional. Voltaremos com os atendimentos normais na terça-feira, 08/09.",
    reactions: ["👏", "❤️", "🎉"],
  },
  dates: [
    { name: "Guilherme Mazzo", info: "Aniversário · 05/05", initials: "GM" },
    { name: "Guilherme Mazzo", info: "17 anos de casa · 01/06", initials: "GM" },
  ],
  team: [
    { name: "Dr. Test Medico", role: "Pediatra", initials: "DT" },
    { name: "Dra. Ana Lima", role: "Ortopedia", initials: "AL" },
    { name: "Marcio A. de Oliveira", role: "Administrador", initials: "MA" },
  ],
};

/* ---------------- PACIENTES ---------------- */
export const demoPatientsList = [
  { name: "Guilherme Oliveira", doc: "***.***.***-**", phone: "(18) 99999-****", tag: "Particular", age: 28, last: "23/06/2026 · 5 consultas", initials: "GO" },
];
export const demoPatientsStats = [
  { label: "Pacientes", value: "1", icon: "users" },
  { label: "Idosos 60+", value: "0", icon: "heart" },
  { label: "Convênio", value: "1", icon: "shield" },
  { label: "Particular", value: "0", icon: "wallet" },
];

/* ---------------- ESPECIALISTAS ---------------- */
export const demoSpecialistsList = [
  { name: "Dr. João Santos", spec: "Cardiologia", crm: "CRM 12345-SP", patients: 42, initials: "JS", color: "#7c5cff" },
  { name: "Dra. Ana Lima", spec: "Ortopedia", crm: "CRM 23456-SP", patients: 31, initials: "AL", color: "#0ea5e9" },
  { name: "Dr. Pedro Mendes", spec: "Dermatologia", crm: "CRM 34567-SP", patients: 28, initials: "PM", color: "#10b981" },
  { name: "Dra. Lúcia Ferreira", spec: "Clínico geral", crm: "CRM 45678-SP", patients: 53, initials: "LF", color: "#f59e0b" },
];

/* ---------------- RELATÓRIOS ---------------- */
export const demoReportBars = [40, 65, 52, 78, 30, 20, 0]; // seg..dom
export const demoReportDonut = [
  { label: "Agendadas", value: 55, color: "#7c5cff" },
  { label: "Em atendimento", value: 25, color: "#10b981" },
  { label: "Canceladas", value: 20, color: "#ef4444" },
];
export const demoReportKpis = [
  { label: "Consultas", value: "10", goal: "Meta: 200", color: "#7c5cff" },
  { label: "Receita", value: "R$ 175.600", goal: "Meta: R$ 50.000", color: "#10b981" },
  { label: "No-show", value: "0%", goal: "Meta: 10%", color: "#0ea5e9" },
  { label: "Novos pacientes", value: "0", goal: "Meta: 30", color: "#f59e0b" },
];

/* ---------------- FINANCEIRO ---------------- */
export const demoFinanceCards = [
  { label: "Receita do mês", value: "R$ 175.600", trend: "+18%", up: true },
  { label: "Despesas", value: "R$ 42.300", trend: "-4%", up: false },
  { label: "Lucro líquido", value: "R$ 133.300", trend: "+22%", up: true },
];
export const demoFinanceRows = [
  { desc: "Consulta · Guilherme Oliveira", date: "23/06", type: "Entrada", value: "+ R$ 35.000", in: true },
  { desc: "Aluguel da sala 3", date: "20/06", type: "Saída", value: "- R$ 8.000", in: false },
  { desc: "Repasse Dr. João Santos", date: "18/06", type: "Saída", value: "- R$ 12.500", in: false },
  { desc: "Consulta · Marina Alves", date: "17/06", type: "Entrada", value: "+ R$ 4.200", in: true },
];

/* ---------------- FATURAMENTO TISS ---------------- */
export const demoTissGuides = [
  { guide: "GU-2026-0142", patient: "Guilherme Oliveira", plan: "Unimed", value: "R$ 320,00", status: "Aprovada", color: "#10b981" },
  { guide: "GU-2026-0141", patient: "Marina Alves", plan: "Bradesco Saúde", value: "R$ 280,00", status: "Em análise", color: "#f59e0b" },
  { guide: "GU-2026-0140", patient: "Carlos Dias", plan: "SulAmérica", value: "R$ 410,00", status: "Glosada", color: "#ef4444" },
];

/* ---------------- ESTOQUE ---------------- */
export const demoStockItems = [
  { name: "Luvas de procedimento (M)", qty: 12, min: 50, unit: "caixas", low: true },
  { name: "Álcool 70% 1L", qty: 28, min: 20, unit: "frascos", low: false },
  { name: "Seringa 5ml", qty: 340, min: 100, unit: "un", low: false },
  { name: "Máscara cirúrgica", qty: 8, min: 40, unit: "caixas", low: true },
];

/* ---------------- COBRANÇAS ---------------- */
export const demoBillingRows = [
  { patient: "Guilherme Oliveira", value: "R$ 35.000", due: "Vence 25/06", status: "Pendente", color: "#f59e0b" },
  { patient: "Marina Alves", value: "R$ 4.200", due: "Pago 17/06", status: "Pago", color: "#10b981" },
  { patient: "Carlos Dias", value: "R$ 890", due: "Atrasado 5 dias", status: "Atrasado", color: "#ef4444" },
];

/* ---------------- LEMBRETES WA ---------------- */
export const demoWaMessages = [
  { patient: "Guilherme Oliveira", text: "Olá! Lembrete da sua consulta amanhã às 08:30. 😊", status: "Entregue", time: "ontem" },
  { patient: "Marina Alves", text: "Seu retorno está agendado para 28/06. Confirme respondendo SIM.", status: "Lido", time: "há 2h" },
  { patient: "Carlos Dias", text: "Não esqueça de trazer seus exames na próxima visita.", status: "Enviado", time: "há 10min" },
];

/* ---------------- LABORATÓRIOS ---------------- */
export const demoLabExams = [
  { patient: "Guilherme Oliveira", exam: "Hemograma completo", lab: "Lab. Central", status: "Resultado disponível", color: "#10b981" },
  { patient: "Marina Alves", exam: "Eletrocardiograma", lab: "CardioLab", status: "Em processamento", color: "#f59e0b" },
  { patient: "Carlos Dias", exam: "Raio-X tórax", lab: "ImagemDx", status: "Coletado", color: "#0ea5e9" },
];

/* ---------------- SUPORTE ---------------- */
export const demoSupportTickets = [
  { id: "VIT-0001", subject: "Preciso que resete meu acesso, não lembro a senha.", cat: "Acesso", priority: "Crítica", status: "Aberto", time: "há 2 dias" },
];
export const demoSupportStats = [
  { label: "Total", value: "1", color: "#0f172a" },
  { label: "Em aberto", value: "1", color: "#0ea5e9" },
  { label: "Em atendimento", value: "0", color: "#f59e0b" },
  { label: "Resolvidos", value: "0", color: "#10b981" },
];
