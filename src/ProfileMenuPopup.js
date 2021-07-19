import React from "react";
import { Avatar } from "@material-ui/core";

import "./ProfileMenuPopup.css";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function ProfileMenuPopup({ show }) {
  const dispatch = useDispatch();

  if (show) {
    return (
      <div className="profileMenu">
        <div className="profileMenu__header">
          <div className="flex-container">
            <Avatar className="avatar" />
            <div className="info">
              <h3 className="name">name</h3>
              <h5 className="title">title</h5>
            </div>
          </div>
          <button className="btn">View Profile</button>
        </div>

        <div className="profileMenu__body">
          <h2 className="heading">Account</h2>
          <ul className="links">
            <li>
              <a href=".">Settings & Privacy</a>
            </li>
            <li>
              <a href=".">Help</a>
            </li>
            <li>
              <a href=".">Language</a>
            </li>
          </ul>
        </div>

        <div className="profileMenu__bottom">
          <h2 className="heading">Manage</h2>
          <ul className="links">
            <li>
              <a href=".">Posts & Activity</a>
            </li>
            <li>
              <a href=".">Jop Posting Account</a>
            </li>
          </ul>
        </div>
        <a
          href="."
          className="signout"
          onClick={() => {
            dispatch(logout());
            auth.signOut();
          }}
        >
          Sign Out
        </a>
      </div>
    );
  } else {
    return <> </>;
  }
}

export default ProfileMenuPopup;
