import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledNavbar = styled.div`
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${Colors.NAVBAR_BACKGROUND};
  flex-direction: row;
  align-items: center;
  align-content: center;
`;
