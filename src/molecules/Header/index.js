import React from "react";

import NavBar from "../../atoms/Navbar";
import NavbarMenu from "../../atoms/NavbarMenu";
import SearchBar from "../../molecules/SearchBar";

export default function Header() {
  return (
    <NavBar>
      <NavbarMenu />
      {/* <SearchBar /> */}
    </NavBar>
  );
}
