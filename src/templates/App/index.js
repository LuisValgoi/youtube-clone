import React from "react";

import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
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
