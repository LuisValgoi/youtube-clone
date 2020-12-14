import React from "react";

import Header from "../../molecules/Header";
import Sidebar from "../../molecules/Sidebar";
import ContentArea from "../../atoms/ContentArea";

export default function AppTemplate({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <ContentArea>{children}</ContentArea>
    </>
  );
}
