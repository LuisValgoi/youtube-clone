import styled from "styled-components";

import * as Colors from "../../styles/Colors";

export const StyledButtonBase = styled.button`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "1.1rem")};
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.color ? props.color : Colors.BUTTON_COLOR_WHITE)};
  height: 100%;

  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  &:hover {
    background-color: ${Colors.CONTENT_AREA_BACKGROUND};
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex: row;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

export const StyledSpan = styled.span`
  color: ${Colors.BUTTON_COLOR_WHITE};
  margin-left: 1rem;
`;
