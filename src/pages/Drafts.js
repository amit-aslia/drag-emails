import React from "react";
import randomId from "random-id";
import MailList from "../components/MailList";

export default function Drafts() {
  return (
    <div className="page">
      <h2>Drafts</h2>

      <MailList
        items={[
          {
            id: randomId(),
            title: "Procurement of new devices",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          },
          {
            id: randomId(),
            title: "Party in office",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          }
        ]}
      />
    </div>
  );
}
