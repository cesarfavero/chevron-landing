export const BRAND = {
  name: "Chevron",
  tagline: "O app dos motoclubes brasileiros",
  description:
    "Rotas em grupo com GPS ao vivo, navegação turn-by-turn, chat do clube, eventos e SOS de emergência.",
} as const;

export const STORE_LINKS = {
  appStore: "https://apps.apple.com/app/chevron",
  playStore:
    "https://play.google.com/store/apps/details?id=com.chevron.mototrack",
} as const;

export const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#recursos", label: "Recursos" },
  { href: "#estrada", label: "Estrada" },
  { href: "#faq", label: "FAQ" },
  { href: "#baixar", label: "Baixar" },
] as const;

export const STATS = [
  {
    label: "Plataformas",
    value: "iOS",
    suffix: "+ Android",
    text: "Apps nativos. Mesma experiência no bolso e no guidão.",
  },
  {
    label: "Tempo real",
    value: "Live",
    suffix: "GPS",
    text: "Localização, chat e SOS via socket — o clube inteiro sincronizado.",
  },
  {
    label: "Segurança",
    value: "SOS",
    suffix: "GPS",
    text: "Alerta com hold-to-send e posição em tempo real para o clube.",
  },
] as const;

export const FEATURES = [
  {
    id: "01",
    title: "Rotas em grupo",
    text: "Crie rota solo ou com o clube, convide por código e veja cada membro no mapa do encontro ao destino.",
  },
  {
    id: "02",
    title: "Navegação turn-by-turn",
    text: "Manobras com voz, preview de rota e câmera pensada pro guidão — legível de dia e de noite.",
  },
  {
    id: "03",
    title: "Clube ao vivo",
    text: "Dashboard, membros online e presença no mapa. Saiba quem está na estrada agora.",
  },
  {
    id: "04",
    title: "Chat do clube",
    text: "Mensagens em tempo real pra combinar o rolê, o posto e o ponto de encontro.",
  },
  {
    id: "05",
    title: "Eventos",
    text: "Encontros, viagens e RSVP. Organize o próximo rolezinho sem planilha.",
  },
  {
    id: "06",
    title: "SOS de emergência",
    text: "Hold-to-send com localização ao vivo para todo o clube quando cada segundo conta.",
  },
] as const;

export const WORKS = [
  {
    index: "01",
    title: "Rota ao vivo",
    meta: "Grupo · GPS · Mapa",
    image: "/images/brutal/asset-7.jpeg",
    alt: "Dois motociclistas em cruiser na ponte ao entardecer",
  },
  {
    index: "02",
    title: "Sportster na cidade",
    meta: "Estrada · Asfalto · Luz",
    image: "/images/brutal/asset-8.jpeg",
    alt: "Harley Sportster preta em rua urbana ao sol",
  },
  {
    index: "03",
    title: "Oficina do clube",
    meta: "Garagem · Preparo · Iron",
    image: "/images/brutal/asset-14.jpeg",
    alt: "Harleys preparadas em oficina oficial",
  },
  {
    index: "04",
    title: "Detalhe de motor",
    meta: "Revolution Max · Força",
    image: "/images/brutal/hd-engine.jpg",
    alt: "Close profissional do motor Revolution Max",
  },
] as const;

export const FAQ = [
  {
    q: "O Chevron é para quem?",
    a: "Para motoclubes e grupos que rodam juntos no Brasil. Quem quer ver o clube no mapa, navegar e se comunicar sem improvisar com WhatsApp.",
  },
  {
    q: "Funciona no iPhone e no Android?",
    a: "Sim. Apps nativos nas duas plataformas, conectados ao mesmo backend — localização, chat e SOS em tempo real.",
  },
  {
    q: "Como entro no clube dos irmãos?",
    a: "Crie um motoclube ou entre com o código de convite. Nas rotas em grupo, o código da viagem também entra no mapa em segundos.",
  },
  {
    q: "O SOS alerta quem?",
    a: "Os membros do seu clube, com localização em tempo real. Hold-to-send pra evitar disparo acidental.",
  },
  {
    q: "Precisa de plano pago?",
    a: "Há plano gratuito com limites mensais de rotas e upgrade PRO pra quem roda mais. Detalhes dentro do app.",
  },
] as const;
