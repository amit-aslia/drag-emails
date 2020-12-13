import React from "react";
import MailItem from "./MailItem";

export default function MailList({ items, setdropSidebarUi, dropSidebarUi }) {
  if (items.length) {
    return (
      <ul className="mail-list">
        {items.map(item => {
          return <MailItem dropSidebarUi={dropSidebarUi} key={item.id} item={item} setdropSidebarUi={setdropSidebarUi} />;
        })}
      </ul>
    );
  }

  return <div className="no-items">No items in this filter</div>;
}
