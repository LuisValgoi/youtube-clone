import React from "react";
import { StyledNavbarMenu } from "./style";

export default function NavbarMenu(props) {
  return (
    <StyledNavbarMenu id="navbar-menu" {...props}>
      <i class="fas fa-bars"></i>
    </StyledNavbarMenu>
  );
}
