const SIDEBAR_ITEMS_GROUP_1 = [
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

const SIDEBAR_ITEMS_GROUP_2 = [
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

export function getSidebarItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([SIDEBAR_ITEMS_GROUP_1, SIDEBAR_ITEMS_GROUP_2]);
    }, 1000);
  });
}
