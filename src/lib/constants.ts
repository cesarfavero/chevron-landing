export const BRAND = {
  name: "Chevron",
  tagline: "O app dos motoclubes brasileiros",
  description:
    "Rotas em grupo, navegação turn-by-turn, chat em tempo real e SOS de emergência. Feito para quem vive na estrada.",
  primary: "#00FF88",
  background: "#030303",
  surface: "#0c0c0c",
} as const;

export const STORE_LINKS = {
  appStore: "https://apps.apple.com/app/chevron",
  playStore:
    "https://play.google.com/store/apps/details?id=com.chevron.mototrack",
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
      "Crie rotas solo ou com o clube, convide por código e acompanhe cada membro no mapa — do ponto de encontro ao destino.",
    icon: "route",
    accent: "#00FF88",
    span: "lg:col-span-7 lg:row-span-2",
    featured: true,
  },
  {
    id: "nav",
    title: "Navegação turn-by-turn",
    description:
      "Manobras com voz, preview de rota e câmera inteligente. Feita pro guidão.",
    icon: "nav",
    accent: "#5DFFB0",
    span: "lg:col-span-5",
    featured: false,
  },
  {
    id: "sos",
    title: "SOS de emergência",
    description:
      "Hold-to-send com localização em tempo real para todo o clube.",
    icon: "sos",
    accent: "#FF5C55",
    span: "lg:col-span-5",
    featured: false,
  },
  {
    id: "club",
    title: "Motoclube conectado",
    description:
      "Dashboard, membros online e presença ao vivo no mapa. Todo mundo junto.",
    icon: "club",
    accent: "#00CC66",
    span: "lg:col-span-4",
    featured: false,
  },
  {
    id: "chat",
    title: "Chat em tempo real",
    description:
      "Combine o rolê, avise o posto e mantenha o clube alinhado na hora.",
    icon: "chat",
    accent: "#4DA3FF",
    span: "lg:col-span-4",
    featured: false,
  },
  {
    id: "events",
    title: "Eventos e rolezinhos",
    description:
      "Encontros, viagens e RSVP. O próximo rolê vira tradição.",
    icon: "events",
    accent: "#FFB020",
    span: "lg:col-span-4",
    featured: false,
  },
] as const;

export const STEPS = [
  {
    step: "01",
    title: "Crie sua conta",
    description: "Cadastro rápido com e-mail. Configure perfil e moto.",
  },
  {
    step: "02",
    title: "Entre no clube",
    description: "Crie um motoclube ou entre com o código de convite.",
  },
  {
    step: "03",
    title: "Parta pro rolê",
    description: "Inicie a rota, chame o grupo e navegue juntos.",
  },
] as const;

export const STATS = [
  { value: "iOS + Android", label: "Nativo nas duas plataformas" },
  { value: "Tempo real", label: "Localização, chat e SOS" },
  { value: "Turn-by-turn", label: "Navegação de verdade" },
  { value: "SOS", label: "Emergência com GPS" },
] as const;
