import React from "react";

import { StyledLogo, StyledLogoArea } from "./style";

export default function Logo(props) {
  return (
    <StyledLogoArea href={props.href}>
      <StyledLogo {...props}>{props.children}</StyledLogo>
    </StyledLogoArea>
  );
}
