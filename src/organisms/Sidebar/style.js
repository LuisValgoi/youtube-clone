import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledSideBar = styled.div`
  height: calc(100% - 70px);
  position: fixed;
  top: 70px;
  background-color: ${Colors.SIDEBAR_BACKGROUND};
  width: 300px;
  z-index: 1;
  overflow-x: scroll;
`;

export const StyledSidebarList = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const StyledSidebarDivisor = styled.hr`
  width: 80%;
  border-color: ${Colors.SIDEBAR_HR};
`;

export const StyledSidebarGroupTitle = styled.h3`
  color: ${Colors.BUTTON_COLOR_GREY};
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.007rem;
  padding-left: 1.4rem;
  text-transform: uppercase;
`;

export const StyledLinkArea = styled.div`
  padding: 0.5rem 1.5rem 0.5rem 1.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledText = styled.span`
  color: ${Colors.LINK_COLOR};
  font-size: 13px;
  font-weight: 400;
  padding: 0.5rem 1.5rem 0.5rem 1.4rem;
`;
