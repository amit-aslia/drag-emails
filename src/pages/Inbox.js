import React from "react";
import { Switch, Route } from "react-router-dom";

import InboxReal from "./InboxReal";

import Forensics from "./Forensics";
import Homicide from "./Homicide";
import CaseFiles from "./CaseFIles";

export default function Inbox() {
  return (
    <Switch>
      <Route path="/inbox" exact component={InboxReal} />
      <Route path="/inbox/forensics" component={Forensics} />
      <Route path="/inbox/homicide" component={Homicide} />
      <Route path="/inbox/case-files" component={CaseFiles} />
    </Switch>
  );
}
