import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledIconBase = styled.button`
  color: white;
  font-size: ${(props) => (props.iconSize ? props.iconSize : "1.1rem")};
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  height: 100%;
  width: 4rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${Colors.CONTENT_AREA_BACKGROUND};
  }
`;
