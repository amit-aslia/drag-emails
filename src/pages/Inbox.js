import React from "react";
import { Switch, Route } from "react-router-dom";

import InboxReal from "./InboxReal";
import { heading } from '../data/heading';
const { inbox, forensics, homicide, caseFile } = heading;

export default function Inbox({ inboxMails, setdropSidebarUi, dropSidebarUi }) {
  return (
    <Switch>
      <Route path="/inbox" exact render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails={inboxMails.inbox.category} heading={inbox}/>} />
      <Route path="/inbox/forensics" render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails = {inboxMails.inbox.subCategory.forensics.category} heading={forensics} />} />
      <Route path="/inbox/homicide" render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails={inboxMails.inbox.subCategory.homicide.category} heading={homicide} />} />
      <Route path="/inbox/case-files" render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails={inboxMails.inbox.subCategory['case-files'].category} heading={caseFile} />} />
    </Switch>
  );
}
