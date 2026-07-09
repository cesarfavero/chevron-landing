export const STORE_LINKS = {
  appStore: "https://apps.apple.com/app/chevron",
  playStore:
    "https://play.google.com/store/apps/details?id=com.chevron.mototrack",
} as const;

export const NAV = [
  { href: "#about", label: "Sobre" },
  { href: "#vectors-section", label: "Recursos" },
  { href: "#works", label: "Estrada" },
  { href: "#faq-section", label: "FAQ" },
  { href: "#contact", label: "Baixar" },
] as const;

export const STATS = [
  {
    label: "Plataformas",
    target: 2,
    suffix: " native",
    display: "iOS + Android",
    text: "Apps nativos. Mesma experiência no bolso e no guidão.",
  },
  {
    label: "Tempo real",
    target: 100,
    suffix: "% live",
    display: null as string | null,
    text: "Localização, chat e SOS via socket — o clube sincronizado.",
  },
  {
    label: "Segurança",
    target: 1,
    suffix: " SOS",
    display: "Hold",
    text: "Alerta com hold-to-send e GPS em tempo real pro clube.",
  },
] as const;

export const SERVICES = [
  {
    id: "01",
    title: "Rotas em grupo",
    text: "Crie rota solo ou com o clube, convide por código e veja cada membro no mapa.",
  },
  {
    id: "02",
    title: "Navegação\nturn-by-turn",
    text: "Manobras com voz, preview de rota e câmera pensada pro guidão.",
  },
  {
    id: "03",
    title: "Clube ao vivo",
    text: "Dashboard, membros online e presença no mapa em tempo real.",
  },
  {
    id: "04",
    title: "Chat do clube",
    text: "Mensagens ao vivo pra combinar o rolê, o posto e o encontro.",
  },
  {
    id: "05",
    title: "Eventos",
    text: "Encontros, viagens e RSVP sem planilha e sem grupo infinito.",
  },
  {
    id: "06",
    title: "SOS",
    text: "Hold-to-send com localização ao vivo quando cada segundo conta.",
  },
] as const;

export const WORKS = [
  {
    case: "01",
    tag: "Grupo · GPS",
    title: ["ROTA", "AO VIVO"],
    caption: "O clube inteiro no mapa — do ponto de encontro ao destino.",
    image: "/images/brutal/asset-7.jpeg",
    aspect: "aspect-[3/4]",
    pos: "md:top-0 md:left-[5%] md:w-[45%]",
    titleClass:
      "absolute top-1/2 -translate-y-1/2 left-4 md:-left-6 lg:-left-10 text-5xl md:text-7xl font-semibold tracking-tighter uppercase mix-blend-difference leading-none z-10 whitespace-nowrap group-hover:italic transition-all proj-title",
    captionClass: "mt-6 text-base tracking-tight uppercase opacity-80 w-3/4 ml-auto text-right proj-caption",
  },
  {
    case: "02",
    tag: "Mapa · Clube",
    title: ["MAPA", "CLUBE"],
    caption: "Quem está online, onde está — presença em tempo real.",
    image: "/images/brutal/hd-beauty.jpg",
    aspect: "aspect-square",
    pos: "md:top-[24%] md:right-[5%] md:w-[38%] mt-24 md:mt-0",
    titleClass:
      "absolute bottom-8 right-4 md:-right-4 lg:-right-8 text-5xl md:text-6xl font-semibold tracking-tighter uppercase mix-blend-difference leading-none text-right z-10 whitespace-nowrap group-hover:tracking-widest transition-all proj-title",
    captionClass: "mt-6 text-base tracking-tight uppercase opacity-80 w-3/4 proj-caption",
  },
  {
    case: "03",
    tag: "Nav · Guidão",
    title: ["NAV", "GUIDÃO"],
    caption: "Turn-by-turn legível de dia e de noite — feito pro asfalto.",
    image: "/images/brutal/asset-8.jpeg",
    aspect: "aspect-[16/9]",
    pos: "md:top-[68%] md:left-[20%] md:w-[55%] mt-24 md:mt-0",
    titleClass:
      "absolute top-4 md:-top-4 left-4 md:left-[18%] lg:left-[22%] text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase mix-blend-difference leading-none z-10 whitespace-nowrap group-hover:-translate-y-4 transition-transform proj-title",
    captionClass: "mt-6 text-base tracking-tight uppercase opacity-80 w-1/2 ml-auto proj-caption",
  },
] as const;

export const VOICES = [
  {
    quote:
      "Antes o rolê era WhatsApp e achismo. Agora o clube inteiro no mapa, com rota e SOS. Mudou o padrão da gente.",
    name: "Carlos Menezes",
    role: "Presidente · MC Serra",
  },
  {
    quote:
      "Navegação de verdade no guidão e o grupo sincronizado. Sem app generico. Feito pra quem roda junto.",
    name: "Ana Ribeiro",
    role: "Capitã de rota · Night Riders SP",
  },
  {
    quote:
      "O SOS com GPS foi o que fechou. Segurança pro clube sem drama. Interface limpa, dark, direta.",
    name: "Diego Santos",
    role: "Fundador · Asfalto Norte",
  },
] as const;

export const FAQ = [
  {
    q: "O Chevron é para quem?",
    a: "Para motoclubes e grupos que rodam juntos no Brasil. Quem quer mapa ao vivo, navegação e comunicação sem improvisar no WhatsApp.",
  },
  {
    q: "Funciona no iPhone e no Android?",
    a: "Sim. Apps nativos nas duas plataformas, no mesmo backend — localização, chat e SOS em tempo real.",
  },
  {
    q: "Como entro no clube?",
    a: "Crie um motoclube ou entre com o código de convite. Nas rotas em grupo, o código da viagem coloca o clube no mapa em segundos.",
  },
  {
    q: "O SOS alerta quem?",
    a: "Os membros do seu clube, com localização em tempo real. Hold-to-send evita disparo acidental.",
  },
] as const;
