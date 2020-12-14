import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../../routes";
import Header from "../../molecules/Header";
import Sidebar from "../../molecules/Sidebar";
import ContentArea from "../../atoms/ContentArea";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <ContentArea>
        <Routes />
      </ContentArea>
    </BrowserRouter>
  );
}
