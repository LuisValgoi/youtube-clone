import React from "react";

import SidebarItem from "../../atoms/SidebarItem";
import { StyledSideBar, StyledSidebarList } from "./style";

const SIDEBAR_ITEMS = [
  {
    text: "Início",
    icon: "home",
  },
  {
    text: "Em Alta",
    icon: "fire",
  },
];

export default function Sidebar(props) {
  return (
    <StyledSideBar id="sidebar" {...props}>
      <StyledSidebarList id="sidebar-list">
        {SIDEBAR_ITEMS.map((item, index) => {
          return <SidebarItem id={`sidebar-list-item-${index}`} text={item.text} icon={item.icon} />;
        })}
      </StyledSidebarList>
    </StyledSideBar>
  );
}
