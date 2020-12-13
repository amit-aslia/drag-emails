import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import _set from 'lodash/set';
import _cloneDeep from 'lodash/cloneDeep'

import Sidebar from "./components/Sidebar";
import InboxReal from "./pages/InboxReal";
import Inbox from "./pages/Inbox";
import mails from './data/mails';
import { findPath, getDataByPath } from './helper/index';
import { heading } from './data/heading';
import "./styles.css";

const { starred, drafts, sent } = heading;

export default function App() {

  const [allMails, setAllMails] = useState({ ...mails });
  const [dropSidebarUi, setdropSidebarUi] = useState('')

  const handleDragAndDrop = (item, key) => {
    const { id, path } = item;
    const allMailsState = _cloneDeep(allMails);

    // delete the picked item
    const categories = getDataByPath(allMailsState, path);
    const filterCategory = categories.filter(category => category.id !== id);
    _set(allMailsState, path, filterCategory);

    // Find path of dropping key
    const dropPath = findPath(allMails, key);
    const dropCategory = getDataByPath(allMailsState, dropPath);

    // add Item
    const newItem = { ...item, path: dropPath };
    dropCategory.push(newItem);
    _set(allMailsState, dropPath, dropCategory);
    setAllMails(allMailsState);
  };

  const handleDropSideBarUi = e => {
    setdropSidebarUi('');
  };

  return (
    <BrowserRouter>
      <h1 className="header">
        <span role="img" aria-label="lapd">
          🚔
        </span>{" "}
        LAPD, Mail
      </h1>
      <div
        className="container"
        onDragOver={e => e.preventDefault()}
        onDrop={e => handleDropSideBarUi(e)}
      >
        <Sidebar dropSidebarUi={dropSidebarUi} allMails={allMails} handleDragAndDrop={handleDragAndDrop} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/inbox" />
          </Route>
          <Route path="/inbox" render={() => <Inbox dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} inboxMails={allMails} />} />
          <Route path="/starred" render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails={allMails[starred].category} heading={starred} />} />
          <Route path="/sent" render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails={allMails[sent].category} heading={sent} />} />
          <Route path="/drafts" render={() => <InboxReal dropSidebarUi={dropSidebarUi} setdropSidebarUi={setdropSidebarUi} mails={allMails[drafts].category} heading={drafts} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
