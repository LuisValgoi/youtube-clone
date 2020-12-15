import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledSideBar = styled.div`
  height: 100%;
  position: fixed;
  top: 50px;
  background-color: ${Colors.SIDEBAR_BACKGROUND};
  width: 300px;
  z-index: 1;
`;

export const StyledSidebarList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: scroll;
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
