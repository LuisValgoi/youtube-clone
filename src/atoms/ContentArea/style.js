import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledContent = styled.div`
  min-height: 100%;
  max-width: 100%;
  position: relative;
  margin-left: 300px;
  top: 70px;
  background-color: ${Colors.CONTENT_AREA_BACKGROUND};
`;

export const StyledArea = styled.main`
  margin: 0 auto;
  text-align: center;
  height: 1500px;
  max-width: 1280px;
  padding: 1rem 0rem 1rem 0rem;
  background-color: ${Colors.CONTENT_AREA_BACKGROUND};
`;
