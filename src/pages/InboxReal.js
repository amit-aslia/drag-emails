import React from "react";
import MailList from "../components/MailList";

export default function InboxReal({mails, heading, setdropSidebarUi, dropSidebarUi}) {
  return (
    <div className="page">
      <h2>{heading.toUpperCase()}</h2>
      <MailList items={mails} dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} />
    </div>
  );
}
