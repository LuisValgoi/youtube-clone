import React from "react";

import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";
import ContentArea from "../../atoms/ContentArea";
import { SidebarProvider } from "../../contexts/sidebar";

export default function AppTemplate({ children }) {
  return (
    <>
      <Header />
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
      <ContentArea>{children}</ContentArea>
    </>
  );
}
