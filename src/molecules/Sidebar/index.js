import React from "react";
import { StyledSideBar } from "./style";

export default function Sidebar(props) {
  return (
    <StyledSideBar id="sidebar" {...props}>
      {props.children}
    </StyledSideBar>
  );
}
