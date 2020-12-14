import React from "react";
import { StyledButtonBase, StyledWrapper, StyledSpan } from "../ButtonBase/style";

export default function Button(props) {
  return (
    <StyledButtonBase {...props}>
      <StyledWrapper id={`${props.id}-wrapper`}>
        <i id={`${props.id}-wrapper-icon`} class={`fas fa-${props.icon}`}></i>
        {props.text && <StyledSpan id={`${props.id}-wrapper-icon-text`}>{props.text}</StyledSpan>}
      </StyledWrapper>
    </StyledButtonBase>
  );
}
