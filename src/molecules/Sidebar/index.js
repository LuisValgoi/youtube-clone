import React from "react";

import SidebarItem from "../../atoms/SidebarItem";
import { StyledSideBar, StyledSidebarList, StyledSidebarDivisor } from "./style";

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

export default function Sidebar(props) {
  return (
    <StyledSideBar id="sidebar" {...props}>
      <StyledSidebarList id="sidebar-list">
        {SIDEBAR_ITEMS_GROUP_1.map((item) => {
          return <SidebarItem key={item.id} id={`sidebar-list-item-${item.id}`} text={item.text} icon={item.icon} />;
        })}
        <StyledSidebarDivisor />
        {SIDEBAR_ITEMS_GROUP_2.map((item) => {
          return <SidebarItem key={item.id} id={`sidebar-list-item-${item.id}`} text={item.text} icon={item.icon} />;
        })}
        <StyledSidebarDivisor />
      </StyledSidebarList>
    </StyledSideBar>
  );
}
