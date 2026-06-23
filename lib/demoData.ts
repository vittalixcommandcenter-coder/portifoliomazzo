/* Dados 100% fictícios para o mini-demo interativo do ProntuIA.
   Nada aqui é real — apenas ilustra a experiência do produto. */

export type DemoPatient = {
  id: string;
  name: string;
  age: number;
  initials: string;
  reason: string;
  time: string;
  status: "Confirmado" | "Aguardando" | "Em atendimento" | "Concluído";
};

export const demoPatients: DemoPatient[] = [
  {
    id: "p1",
    name: "Helena Costa",
    age: 34,
    initials: "HC",
    reason: "Retorno · Clínico geral",
    time: "09:00",
    status: "Em atendimento",
  },
  {
    id: "p2",
    name: "Rafael Lima",
    age: 47,
    initials: "RL",
    reason: "Teleconsulta · Cardiologia",
    time: "09:40",
    status: "Confirmado",
  },
  {
    id: "p3",
    name: "Beatriz Souza",
    age: 28,
    initials: "BS",
    reason: "Primeira consulta",
    time: "10:20",
    status: "Aguardando",
  },
  {
    id: "p4",
    name: "André Martins",
    age: 61,
    initials: "AM",
    reason: "Resultado de exames",
    time: "11:00",
    status: "Confirmado",
  },
];

export const demoMetrics = [
  { label: "Consultas hoje", value: "18", delta: "+12%" },
  { label: "Teleconsultas", value: "7", delta: "+3" },
  { label: "Taxa de retorno", value: "92%", delta: "+4%" },
  { label: "Tempo médio", value: "22min", delta: "-3min" },
];

/* Prontuário em foco (Helena Costa) */
export const demoRecord = {
  patient: demoPatients[0],
  vitals: [
    { label: "Pressão", value: "120/80", unit: "mmHg" },
    { label: "FC", value: "72", unit: "bpm" },
    { label: "Temp", value: "36.5", unit: "°C" },
    { label: "SpO₂", value: "98", unit: "%" },
  ],
  timeline: [
    {
      date: "Hoje",
      title: "Consulta de retorno",
      text: "Paciente relata melhora dos sintomas. Mantida conduta anterior.",
    },
    {
      date: "12 mai",
      title: "Exames laboratoriais",
      text: "Hemograma completo dentro dos parâmetros de referência.",
    },
    {
      date: "28 abr",
      title: "Primeira consulta",
      text: "Queixa inicial de cefaleia recorrente. Solicitados exames.",
    },
  ],
  allergies: ["Dipirona", "Penicilina"],
  meds: ["Losartana 50mg", "Vitamina D 2000UI"],
};

/* Sugestões da IA (Co-Piloto clínico) — mapeadas a CID-10 fictícios */
export type AISuggestion = {
  cid: string;
  name: string;
  confidence: number; // 0-100
  rationale: string;
};

export const demoAISymptoms = [
  "Cefaleia",
  "Fotofobia",
  "Náusea",
  "Dor pulsátil unilateral",
];

export const demoAISuggestions: AISuggestion[] = [
  {
    cid: "G43.0",
    name: "Enxaqueca sem aura",
    confidence: 87,
    rationale: "Dor pulsátil unilateral + fotofobia + náusea são altamente sugestivos.",
  },
  {
    cid: "G44.2",
    name: "Cefaleia tensional",
    confidence: 54,
    rationale: "Compatível com cefaleia, porém menos provável dado o padrão pulsátil.",
  },
  {
    cid: "R51",
    name: "Cefaleia não especificada",
    confidence: 31,
    rationale: "Hipótese de baixa especificidade; usar se demais forem descartadas.",
  },
];

/* Agenda / teleconsulta */
export const demoAgenda = [
  { time: "08:00", patient: "Marina Alves", type: "Presencial", done: true },
  { time: "09:00", patient: "Helena Costa", type: "Presencial", done: false, now: true },
  { time: "09:40", patient: "Rafael Lima", type: "Teleconsulta", done: false },
  { time: "10:20", patient: "Beatriz Souza", type: "Presencial", done: false },
  { time: "11:00", patient: "André Martins", type: "Presencial", done: false },
  { time: "14:00", patient: "Carlos Dias", type: "Teleconsulta", done: false },
];
