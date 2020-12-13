import React, { useState } from "react";
import { dropArray1 } from "../data/dropArray";

export default function MailItem({ item, setdropSidebarUi, dropSidebarUi }) {
  const [ opacity, setOpacity ] = useState(false);
  const handleDragStart = (e, item) => {
    setOpacity(true);
    const myPath = item.path.split('.')[0];
    const drop1 = dropArray1.some(k => k === myPath);
    drop1 ? setdropSidebarUi('dropArray1') : setdropSidebarUi('dropArray2')
    e.dataTransfer.setData('data', JSON.stringify(item));
  } 
  return (
    <li 
      draggable 
      className={`mail-item ${opacity && dropSidebarUi ? 'opacity' : ''}`}
      onDragStart={e => handleDragStart(e, item)}
    >
      <span role="img" aria-label="mark star" style={{ marginRight: "8px" }}>
        ⭐️
      </span>
      <span>
        {item.isRead || typeof item.isRead === "undefined" ? (
          item.title
        ) : (
          <strong>{item.title}</strong>
        )}
      </span>
    </li>
  );
}
