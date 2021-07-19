import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./HeaderOption.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title }) {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!avatar) {
    return (
      <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        <h3 className="headerOption__title">{title}</h3>
      </div>
    );
  } else {
    return (
      <div className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {loading ? (
          <> </>
        ) : user.photoUrl ? (
          <Avatar className="headerOption__avatar" src={user.photoUrl}></Avatar>
        ) : (
          <Avatar className="headerOption__avatar">
            {user.displayName[0].toUpperCase()}
          </Avatar>
        )}

        <h3 className="headerOption__title">{title}</h3>
      </div>
    );
  }
}

export default HeaderOption;
