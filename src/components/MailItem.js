import React from "react";

export default function MailItem({ item }) {
  return (
    <li className="mail-item">
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
