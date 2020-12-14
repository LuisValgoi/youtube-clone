import React from "react";
import { StyledNavbarMenu } from "./style";

export default function NavbarMenu(props) {
  return (
    <StyledNavbarMenu id="nav-bar-menu-button" {...props}>
      {props.children}
    </StyledNavbarMenu>
  );
}
