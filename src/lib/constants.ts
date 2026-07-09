export const BRAND = {
  name: "Chevron",
  tagline: "O app dos motoclubes brasileiros",
  description:
    "Rotas em grupo, navegação turn-by-turn, chat em tempo real e SOS de emergência. Feito para quem vive na estrada.",
  primary: "#00FF88",
  background: "#0A0A0A",
  surface: "#141414",
} as const;

export const STORE_LINKS = {
  // Placeholder URLs — replace when store listings go live
  appStore: "https://apps.apple.com/app/chevron",
  playStore: "https://play.google.com/store/apps/details?id=com.chevron.mototrack",
} as const;

export const NAV_LINKS = [
  { href: "#features", label: "Recursos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#download", label: "Baixar" },
] as const;

export const FEATURES = [
  {
    id: "rides",
    title: "Rotas em grupo",
    description:
      "Crie rotas solo ou em grupo com convite por código. Acompanhe cada membro no mapa em tempo real, do ponto de encontro até o destino.",
    icon: "route",
    accent: "#00FF88",
  },
  {
    id: "nav",
    title: "Navegação turn-by-turn",
    description:
      "Instruções de manobra com voz, preview de rota e câmera inteligente. Feita para o guidão — legível, rápida e precisa.",
    icon: "nav",
    accent: "#44FFAA",
  },
  {
    id: "club",
    title: "Motoclube conectado",
    description:
      "Dashboard do clube, membros online, código de convite e presença ao vivo no mapa. Seu pack, sempre unido.",
    icon: "club",
    accent: "#00CC66",
  },
  {
    id: "chat",
    title: "Chat em tempo real",
    description:
      "Mensagens instantâneas do clube via Socket.io. Combine o rolê, avise o ponto de gasolina, mantenha o pack alinhado.",
    icon: "chat",
    accent: "#0A84FF",
  },
  {
    id: "events",
    title: "Eventos & rolezinhos",
    description:
      "Crie encontros, viagens e RSVPs. Gerencie participantes e transforme o próximo encontro em tradição.",
    icon: "events",
    accent: "#FF9F0A",
  },
  {
    id: "sos",
    title: "SOS de emergência",
    description:
      "Alerta instantâneo para o clube com localização em tempo real. Hold-to-send quando cada segundo importa.",
    icon: "sos",
    accent: "#FF453A",
  },
] as const;

export const STEPS = [
  {
    step: "01",
    title: "Crie sua conta",
    description: "Cadastro rápido com e-mail. Configure seu perfil e sua moto.",
  },
  {
    step: "02",
    title: "Entre no clube",
    description: "Crie um motoclube ou entre com o código de convite dos irmãos.",
  },
  {
    step: "03",
    title: "Parta pro rolê",
    description: "Inicie a rota, convide o pack e navegue juntos em tempo real.",
  },
] as const;

export const STATS = [
  { value: "iOS + Android", label: "Nativo em ambas as plataformas" },
  { value: "Tempo real", label: "Localização, chat e SOS via socket" },
  { value: "Turn-by-turn", label: "Navegação profissional na estrada" },
  { value: "SOS", label: "Emergência com GPS para o clube" },
] as const;
