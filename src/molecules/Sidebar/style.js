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
`;
