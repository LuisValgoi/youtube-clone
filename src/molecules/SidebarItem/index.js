import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { StyledItem, StyledAvatar, StyledText, StyledLiveArea, StyledNewsArea, StyledButton, StyledIconArea } from "./style";
import { useSidebarItem } from "../../contexts/sidebarItem";

export default function SidebarItem(props) {
  const history = useHistory();
  const { isCurrentItemSelected } = useSidebarItem();

  return (
    <StyledItem {...props}>
      <StyledButton id={`${props.id}-button`} text={props.text} width="100%" onClick={() => history.push(props.route)} selected={isCurrentItemSelected}>
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

SidebarItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  route: PropTypes.string,
  icon: PropTypes.string,
  avatar: PropTypes.string,
  live: PropTypes.bool,
  news: PropTypes.bool,
};
