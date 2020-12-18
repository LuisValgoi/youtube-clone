import { createContext, useContext, useEffect, useState } from "react";

import * as service from "../services/sidebar";
import { useAuth } from './auth';

const SidebarContext = createContext({ subscriptions: [], sidebarItems: [] });

export const SidebarProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [sidebarItems, setSidebarItems] = useState([]);
  const { signed } = useAuth();

  useEffect(() => {
    async function fetchData() {
      setSidebarItems(signed ? await service.getSidebarItems() : await service.getSidebarNoAccessItems());
      setSubscriptions(await service.getSubscriptions());
    }

    fetchData();
  }, [signed]);

  return <SidebarContext.Provider value={{ subscriptions, sidebarItems }}>{children}</SidebarContext.Provider>;
};

export function useSidebar() {
  const sidebar = useContext(SidebarContext);
  if (!sidebar) throw new Error("it must be used within a Provider");
  return sidebar;
}