import React from "react";

function FeedPostIcon(Icon, title) {
  return (
    <div className="feed__postIcon">
      <Icon className="feed__postIconImage" />
      <span className="feed__postIconTitle">{title}</span>
    </div>
  );
}

export default FeedPostIcon;
