import React from "react";

import NavBar from "../../atoms/Navbar";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";

export default function Header() {
  return (
    <NavBar id="navbar">
      <Button id="navbar-sidebar" icon="bars" style={{ borderRadius: "50%" }} width="4.45rem" />
      <Logo id="navbar-logo" href="/" src="/images/logo.png" />
    </NavBar>
  );
}
