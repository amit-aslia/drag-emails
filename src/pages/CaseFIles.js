import React from "react";
import MailList from "../components/MailList";

export default function CaseFiles() {
  return (
    <div className="page">
      <h2>Case Files</h2>

      <MailList items={[]} />
    </div>
  );
}
