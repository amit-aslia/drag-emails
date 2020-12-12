import React from "react";
import MailList from "../components/MailList";

export default function Starred() {
  return (
    <div className="page">
      <h2>Starred</h2>

      <MailList items={[]} />
    </div>
  );
}
