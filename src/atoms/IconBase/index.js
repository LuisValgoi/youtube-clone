import React from "react";

import { StyledIconBase } from "./style";

export default function IconBase(props) {
  return <StyledIconBase {...props}>{props.children}</StyledIconBase>;
}
