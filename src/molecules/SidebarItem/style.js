import styled from "styled-components";

import ButtonBase from "../../atoms/ButtonBase";
import * as Colors from "../../styles/Colors";

export const StyledItem = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: 50px;
  color: ${Colors.SIDEBAR_ITEM_BACKGROUND};
`;

export const StyledButton = styled(ButtonBase)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-items: center;
  padding: 0.5rem 1.4rem 0.5rem 1.4rem;
  background-color: ${(props) => (props.selected ? Colors.BUTTON_COLOR_WHITE_HOVER : "auto")};
`;

export const StyledAvatar = styled.img`
  max-width: 1.5rem;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    transform: translateY(-4px);
    transition: all 0.2s;
  }
`;

export const StyledIconArea = styled.div`
  min-width: 1rem;
  max-width: 1rem;
  color: ${Colors.BUTTON_COLOR_GREY};
`;

export const StyledText = styled.span`
  color: ${Colors.BUTTON_COLOR_WHITE};
  margin-left: 1.4rem;
  flex-grow: 1;
  text-align: start;
`;

export const StyledLiveArea = styled.div`
  min-width: 0.15rem;
  max-width: 0.15rem;
  font-size: 10px;
  color: ${Colors.SIDEBAR_LIVE_COLOR};
`;

export const StyledNewsArea = styled.div`
  min-width: 0.15rem;
  max-width: 0.15rem;
  font-size: 10px;
  color: ${Colors.SIDEBAR_NEWS_COLOR};
`;
