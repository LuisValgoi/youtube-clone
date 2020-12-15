import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../../routes";
import AppTemplate from "../../templates/App";

export default function App() {
  return (
    <BrowserRouter>
      <AppTemplate>
        <Routes />
      </AppTemplate>
    </BrowserRouter>
  );
}
