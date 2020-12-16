import React from "react";
import { useHistory } from "react-router-dom";

import { StyledItem, StyledAvatar, StyledText, StyledLiveArea, StyledNewsArea, StyledButton, StyledIconArea } from "./style";

export default function SidebarItem(props) {
  const history = useHistory();

  return (
    <StyledItem {...props}>
      <StyledButton id={`${props.id}-button`} text={props.text} width="100%" onClick={() => history.push(props.route)}>
        {props.icon && (
          <StyledIconArea>
            <i id={`${props.id}-wrapper-icon`} className={`fas fa-${props.icon}`}></i>
          </StyledIconArea>
        )}

        {props.avatar && (
          <>
            <StyledAvatar id={`${props.id}-avatar`} src={props.avatar} alt={props.text} />
          </>
        )}

        <StyledText id={`${props.id}-text`}>{props.text}</StyledText>

        {props.live && (
          <StyledLiveArea id={`${props.id}-live`}>
            <i id={`${props.id}-wrapper-live`} className="fas fa-satellite-dish"></i>
          </StyledLiveArea>
        )}

        {!props.live && props.news && (
          <StyledNewsArea id={`${props.id}-news`}>
            <i id={`${props.id}-wrapper-news`} className="fas fa-circle"></i>
          </StyledNewsArea>
        )}
      </StyledButton>
    </StyledItem>
  );
}
