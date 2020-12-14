import React from "react";

import { StyledSearchBar } from "./style";

export default function SearchBar(props) {
  return <StyledSearchBar>{props.children}</StyledSearchBar>;
}
