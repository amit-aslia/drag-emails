import randomId from "random-id";
import React from "react";
import MailList from "../components/MailList";

export default function Forensics() {
  return (
    <div className="page">
      <h2>Forensics</h2>

      <MailList
        items={[
          {
            id: randomId(),
            title: "Blood report from Ohio crime scene",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            isRead: false
          }
        ]}
      />
    </div>
  );
}
