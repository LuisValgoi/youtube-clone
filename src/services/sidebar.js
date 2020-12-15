const SIDEBAR_ITEMS_SECTION_1 = [
  {
    id: "home",
    text: "Início",
    icon: "home",
  },
  {
    id: "high",
    text: "Em Alta",
    icon: "fire",
  },
  {
    id: "subs",
    text: "Inscrições",
    icon: "folder",
  },
];

const SIDEBAR_ITEMS_SECTION_2 = [
  {
    id: "lib",
    text: "Biblioteca",
    icon: "book",
  },
  {
    id: "history",
    text: "Histórico",
    icon: "history",
  },
  {
    id: "yourVideos",
    text: "Seus Vídeos",
    icon: "play",
  },
  {
    id: "watchLater",
    text: "Assistir Mais Tarde",
    icon: "clock",
  },
  {
    id: "liked",
    text: "Vídeos que Gostei",
    icon: "thumbs-up",
  },
];

const SIDEBAR_ITEMS_SECTION_3 = [
  {
    id: "youtubepremium",
    text: "Youtube Premium",
    icon: "crown",
  },
  {
    id: "movies",
    text: "Filmes",
    icon: "film",
  },
  {
    id: "games",
    text: "Jogos",
    icon: "gamepad",
  },
  {
    id: "live",
    text: "Ao vivo",
    icon: "satellite-dish",
  },
  {
    id: "learn",
    text: "Aprender",
    icon: "lightbulb",
  },
];

const SIDEBAR_ITEMS_SECTION_4 = [
  {
    id: "settings",
    text: "Configurações",
    icon: "cog",
  },
  {
    id: "complaint",
    text: "Histórico de Denúncias",
    icon: "flag",
  },
  {
    id: "help",
    text: "Ajuda",
    icon: "question-circle",
  },
  {
    id: "feedback",
    text: "Enviar feedback",
    icon: "comment-alt",
  },
];

const SIDEBAR_ITEMS_SECTION_5 = [
  { text: "Sobre", to: "/about" },
  { text: "Imprensa", to: "/press" },
  { text: "Direitos autorais", to: "/kanban" },
  { text: "Entre em contato", to: "/contact" },
  { text: "Criadores de conteúdo", to: "/creators" },
  { text: "Publicidade", to: "/publicty" },
  { text: "Desenvolvedores", to: "/developers" },
];

const SIDEBAR_ITEMS_SECTION_6 = [
  { text: "Termos", to: "/terms" },
  { text: "Privacidade", to: "/privacy" },
  { text: "Política e Segurança", to: "/policy" },
  { text: "Como funcion o Youtube", to: "/how-youtube-works" },
  { text: "Criadores de conteúdo", to: "/creators" },
  { text: "Testar os novos recursos", to: "/testing" },
];

const SIDEBAR_SUBSCRIPTIONS = [
  {
    id: "flowpodcast",
    text: "Flow Podcast",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwnh3qcXoKDGfaEE_tqvBu-VCHcUg0lEPXjBNFT4rgA=s88-c-k-c0x00ffffff-no-rj",
    live: true,
    news: false,
  },
  {
    id: "rocketseat",
    text: "Rocketseat",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwniZFvNe5OEM2bTjcGRdH8fOW06pr9HYSJCwDPK_BA=s88-c-k-c0x00ffffff-no-rj",
    live: true,
    news: false,
  },
  {
    id: "stormer",
    text: "Stormer",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwngA5eFNDlG5i-9yopoC240MX6mSeBlkfinP4QRY=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
  {
    id: "matheuscastiglioni",
    text: "Matheus Castigliolini",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwnhUFkOaD4EVK2acel-KIZ0REYDdxS-DbK6YZRJvsg=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
  {
    id: "jovensnegocio",
    text: "Jovens de Negócio",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwniU_y_8AgVHuZtkNIA8LS9KrxW0GzxklKQfUC0UMw=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: false,
  },
  {
    id: "robcorrea",
    text: "Rob Correa",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwng1e58hGkNZ9pkTUAVJhitK4RsPjq__d-sVbiYUwA=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: false,
  },
  {
    id: "nostalgia",
    text: "Nostalgia",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwnhCyhRpGYPgAW70Jz6lWQX4HtXJoBLcW3BZJYkZ-w=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
  {
    id: "kalehaldden",
    text: "Kalle Haldden",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwnjXndA1IozeIYHvyWML5BLjhrXBkqvtnSXjwOwOyQ=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
  {
    id: "devpleno",
    text: "Dev Pleno",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwnhHD5ZZRbN1_BoTEcszRhrGhZjtuSdgA6SEhV70CA=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
  {
    id: "jovemnerd",
    text: "Jovem Nerd",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwnhplqeAtqHJ2MlBTFJkZ1jepRFtTdwoY7PQPQdH=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
  {
    id: "celke",
    text: "Celke",
    avatar: "https://yt3.ggpht.com/ytc/AAUvwngFb9zi9pF7_cVPudPvwVbiXw6lwSqmAIAKtud9=s88-c-k-c0x00ffffff-no-rj",
    live: false,
    news: true,
  },
];

export function getSidebarItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([SIDEBAR_ITEMS_SECTION_1, SIDEBAR_ITEMS_SECTION_2, SIDEBAR_ITEMS_SECTION_3, SIDEBAR_ITEMS_SECTION_4, SIDEBAR_ITEMS_SECTION_5, SIDEBAR_ITEMS_SECTION_6]);
    }, 1000);
  });
}

export function getSubscriptions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SIDEBAR_SUBSCRIPTIONS);
    }, 1500);
  });
}
