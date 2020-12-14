import React from "react";
import { StyledArea, StyledContent } from "./style";

export default function ContentArea(props) {
  return (
    <StyledContent id="content" {...props}>
      <StyledArea id="area">{props.children}</StyledArea>
    </StyledContent>
  );
}
