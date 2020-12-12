import React from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarLabels from "./SidebarLabels";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/inbox">
        <SidebarItem>
          <span role="img" aria-label="inbox">
            📥
          </span>{" "}
          INBOX (4)
        </SidebarItem>
      </NavLink>

      <SidebarLabels>
        <NavLink to="/inbox/forensics">
          <SidebarItem>FORENSICS (1)</SidebarItem>
        </NavLink>
        <NavLink to="/inbox/homicide">
          <SidebarItem>HOMICIDE</SidebarItem>
        </NavLink>
        <NavLink to="/inbox/case-files">
          <SidebarItem>CASE FILES</SidebarItem>
        </NavLink>
      </SidebarLabels>

      <NavLink to="/starred">
        <SidebarItem>
          <span role="img" aria-label="inbox">
            ⭐️
          </span>{" "}
          STARRED
        </SidebarItem>
      </NavLink>

      <NavLink to="/sent">
        <SidebarItem>
          <span role="img" aria-label="inbox">
            ✉️
          </span>{" "}
          SENT
        </SidebarItem>
      </NavLink>

      <NavLink to="/drafts">
        <SidebarItem>
          <span role="img" aria-label="inbox">
            📨
          </span>{" "}
          DRAFTS (2)
        </SidebarItem>
      </NavLink>
    </div>
  );
}
