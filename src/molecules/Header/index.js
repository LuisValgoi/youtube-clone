import React from "react";

import NavBar from "../../atoms/Navbar";
import Button from "../../atoms/Button";

export default function Header() {
  return (
    <NavBar id="navbar">
      <Button id="navbar-button-main" icon="bars" />
    </NavBar>
  );
}
