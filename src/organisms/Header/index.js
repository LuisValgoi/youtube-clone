import React from "react";

import NavBar from "../../atoms/Navbar";
import Logo from "../../atoms/Logo";

import { StyledButton } from "./style";

export default function Header() {
  return (
    <NavBar id="navbar">
      <StyledButton id="navbar-sidebar" icon="bars" />
      <Logo id="navbar-logo" href="/" src="/images/logo.png" />
    </NavBar>
  );
}
