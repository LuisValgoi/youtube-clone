import React from "react";

import { StyledButtonBase } from "./style";

export default function ButtonBase(props) {
  return <StyledButtonBase {...props}>{props.children}</StyledButtonBase>;
}
