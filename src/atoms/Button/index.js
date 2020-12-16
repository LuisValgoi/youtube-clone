import React from "react";
import PropTypes from "prop-types";

import { StyledButtonBase, StyledWrapper, StyledSpan, StyledIconArea } from "../ButtonBase/style";

export default function Button(props) {
  return (
    <StyledButtonBase {...props}>
      <StyledWrapper id={`${props.id}-wrapper`}>
        {props.icon && (
          <StyledIconArea>
            <i id={`${props.id}-wrapper-icon`} className={`fas fa-${props.icon}`}></i>
          </StyledIconArea>
        )}
        {props.text && <StyledSpan id={`${props.id}-wrapper-icon-text`}>{props.text}</StyledSpan>}
      </StyledWrapper>
    </StyledButtonBase>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
};
