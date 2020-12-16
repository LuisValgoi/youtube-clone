import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const SidebarItemContext = createContext({ isCurrentItemSelected: false });

export const SidebarItemProvider = ({ children, route }) => {
  const location = useLocation();
  const [isCurrentItemSelected, setIsCurrentItemSelected] = useState("");

  useEffect(() => {
    setIsCurrentItemSelected(location.pathname === route);
  }, [location, route]);

  return <SidebarItemContext.Provider value={{ isCurrentItemSelected }}>{children}</SidebarItemContext.Provider>;
};

export function useSidebarItem() {
  const sidebar = useContext(SidebarItemContext);
  if (!sidebar) throw new Error("it must be used within a Provider");
  const { isCurrentItemSelected } = sidebar;
  return { isCurrentItemSelected };
}
