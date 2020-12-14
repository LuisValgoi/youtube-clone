import React from "react";
import Button from "../Button";

import { StyledSidebarItem } from "./style";
import * as Colors from "../../styles/Colors";

export default function SidebarItem(props) {
  return (
    <StyledSidebarItem {...props}>
      <Button id={`${props.id}-button`} text={props.text} icon={props.icon} width="100%" color={Colors.BUTTON_COLOR_GREY} />
    </StyledSidebarItem>
  );
}
