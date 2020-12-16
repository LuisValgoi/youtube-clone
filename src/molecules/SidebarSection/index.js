import React from "react";

import SidebarItem from "../../molecules/SidebarItem";

export default function SidebarSection({ items, prefixId }) {
  return (
    <>
      {(!items || items.length === 0) && <SidebarItem id={`${prefixId}-spinner`} text="Loading..." icon="spinner" />}
      {items &&
        items.length > 0 &&
        items.map((item) => {
          return <SidebarItem key={item.key} id={`${prefixId}-${item.id}`} text={item.text} icon={item.icon} avatar={item.avatar} live={item.live} news={item.news} route={item.route} />;
        })}
    </>
  );
}
