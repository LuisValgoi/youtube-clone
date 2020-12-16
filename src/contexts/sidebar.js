import { createContext, useContext, useEffect, useState } from "react";

import * as service from "../services/sidebar";

const SidebarContext = createContext({ subscriptions: [], sidebarItems: [] });

export const SidebarProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [sidebarItems, setSidebarItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setSidebarItems(await service.getSidebarItems());
      setSubscriptions(await service.getSubscriptions());
    }

    fetchData();
  }, []);

  return <SidebarContext.Provider value={{ subscriptions, sidebarItems }}>{children}</SidebarContext.Provider>;
};

export function useSidebar() {
  const sidebar = useContext(SidebarContext);
  if (!sidebar) throw new Error("it must be used within a Provider");
  return sidebar;
}
