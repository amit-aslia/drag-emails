import randomId from "random-id";
import React from "react";
import MailList from "../components/MailList";

export default function InboxReal() {
  return (
    <div className="page">
      <h2>Inbox</h2>

      <MailList
        items={[
          {
            id: randomId(),
            title: "Lunch with detective",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            isRead: false
          },
          {
            id: randomId(),
            title: "New case files",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            isRead: false
          },
          {
            id: randomId(),
            title: "Forensics report from Ella",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            isRead: false
          },
          {
            id: randomId(),
            title: "Pierce murder history files",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            isRead: true
          }
        ]}
      />
    </div>
  );
}
