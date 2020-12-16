import React from "react";

import Links from "../../atoms/Links";
import SidebarSection from "../../molecules/SidebarSection";
import { StyledSideBar, StyledSidebarList, StyledSidebarDivisor, StyledSidebarGroupTitle, StyledLinkArea, StyledText } from "./style";
import { useSidebar } from "../../contexts/sidebar";

export default function Sidebar(props) {
  const { sidebarItems, subscriptions } = useSidebar();

  return (
    <StyledSideBar id="sidebar" {...props}>
      <StyledSidebarList id="sidebar-list">
        <SidebarSection items={sidebarItems[0]} prefixId="sidebar-section-menus-first" />
        <StyledSidebarDivisor />
        <SidebarSection items={sidebarItems[1]} prefixId="sidebar-section-menus-second" />
        <StyledSidebarDivisor />
        <StyledSidebarGroupTitle>Inscrições</StyledSidebarGroupTitle>
        <SidebarSection items={subscriptions} prefixId="sidebar-section-group-subscription" />
        <StyledSidebarDivisor />
        <StyledSidebarGroupTitle>Mais do Youtube</StyledSidebarGroupTitle>
        <SidebarSection items={sidebarItems[2]} prefixId="sidebar-section-menus-third" />
        <StyledSidebarDivisor />
        <SidebarSection items={sidebarItems[3]} prefixId="sidebar-section-menus-fourth" />
        <StyledSidebarDivisor />
        <StyledLinkArea>
          <Links links={sidebarItems[4]} />
        </StyledLinkArea>
        <StyledLinkArea>
          <Links links={sidebarItems[5]} />
        </StyledLinkArea>
        <StyledText>© 2020 Google LLC</StyledText>
      </StyledSidebarList>
    </StyledSideBar>
  );
}
