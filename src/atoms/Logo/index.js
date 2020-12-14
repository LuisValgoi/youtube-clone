import React from "react";

import { StyledLogo } from "./style";

export default function Logo(props) {
  return (
    <a href={props.href}>
      <StyledLogo {...props}>{props.children}</StyledLogo>
    </a>
  );
}
