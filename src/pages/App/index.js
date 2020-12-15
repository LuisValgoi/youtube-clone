import React from "react";
import { BrowserRouter } from "react-router-dom";

import { routes } from "../../routes";
import AppTemplate from "../../templates/App";

export default function App() {
  return (
    <BrowserRouter>
      <AppTemplate>{routes}</AppTemplate>
    </BrowserRouter>
  );
}
