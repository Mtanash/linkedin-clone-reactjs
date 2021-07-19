import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./Sidebar.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  if (loading) {
    return <> </>;
  } else {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            src="https://images.unsplash.com/photo-1565109287667-995c33367aa3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
            alt=""
          />
          <Avatar className="sidebar__avatar" src={user.photoUrl}>
            {user ? user.displayName[0].toUpperCase() : "?"}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="sidebar__line"></div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>
              Who viewed your profile <span>100</span>
            </p>
          </div>
          <div className="sidebar__stat">
            <p>
              Connections <span>500</span>
            </p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("Reacct js")}
          {recentItem("Programming")}
          {recentItem("Next js")}
          {recentItem("HTML")}
          {recentItem("CSS")}
          {recentItem("Development")}
        </div>
      </div>
    );
  }
}

export default Sidebar;
