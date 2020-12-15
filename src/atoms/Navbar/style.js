import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledNavbar = styled.div`
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${Colors.NAVBAR_BACKGROUND};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
