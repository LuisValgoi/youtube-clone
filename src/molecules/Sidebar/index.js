import React, { useEffect, useState } from "react";

import * as api from "../../services/sidebar";
import SidebarItem from "../../atoms/SidebarItem";
import { StyledSideBar, StyledSidebarList, StyledSidebarDivisor, StyledSidebarGroupTitle } from "./style";

export default function Sidebar(props) {
  const [sidebarItems, setSidebarItems] = useState([]);

  useEffect(() => {
    async function fetchSidebarItem() {
      const response = await api.getSidebarItems();
      setSidebarItems(response);
    }

    fetchSidebarItem();
  }, []);

  return (
    <StyledSideBar id="sidebar" {...props}>
      <StyledSidebarList id="sidebar-list">
        {(!sidebarItems || sidebarItems.length === 0) && <SidebarItem key={1} id={`sidebar-list-item-spinner`} text="Loading..." icon="spinner" />}

        {sidebarItems.length > 0 &&
          sidebarItems[0].map((item) => {
            return <SidebarItem key={item.id} id={`sidebar-list-item-${item.id}`} text={item.text} icon={item.icon} />;
          })}

        <StyledSidebarDivisor />
        {(!sidebarItems || sidebarItems.length === 0) && <SidebarItem key={2} id={`sidebar-list-item-spinner`} text="Loading..." icon="spinner" />}

        {sidebarItems.length > 0 &&
          sidebarItems[1].map((item) => {
            return <SidebarItem key={item.id} id={`sidebar-list-item-${item.id}`} text={item.text} icon={item.icon} />;
          })}
        <StyledSidebarDivisor />
        <StyledSidebarGroupTitle>Inscrições</StyledSidebarGroupTitle>
      </StyledSidebarList>
    </StyledSideBar>
  );
}
