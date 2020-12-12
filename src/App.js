import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Drafts from "./pages/Drafts";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Starred from "./pages/Starred";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <h1 className="header">
        <span role="img" aria-label="lapd">
          🚔
        </span>{" "}
        LAPD, Mail
      </h1>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/inbox" />
          </Route>
          <Route path="/inbox" component={Inbox} />
          <Route path="/starred" component={Starred} />
          <Route path="/sent" component={Sent} />
          <Route path="/drafts" component={Drafts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
