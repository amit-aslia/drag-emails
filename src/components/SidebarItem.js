import React from "react";

export default function SidebarItem({ children, classNames }) {
  return <div className={`${classNames} sidebar-item`}>{children}</div>;
}
