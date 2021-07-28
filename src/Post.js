import React from "react";
import FeedPostIcon from "./FeedPostIcon";

import { Avatar } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

import "./Post.css";

function Post({ photoUrl, name, title, postText }) {
  return (
    <div className="feed__post">
      <div className="feed__postHeader">
        {photoUrl ? (
          <Avatar src={photoUrl}></Avatar>
        ) : (
          <Avatar className="feed__postAvatar">{name[0]}</Avatar>
        )}

        <div className="feed__postHeader__info">
          <h2>{name}</h2>
          <h4>{title}</h4>
        </div>
      </div>

      <div className="feed__postBody">
        <p>{postText}</p>
        <div className="feed__postReactions"></div>
      </div>

      <div className="feed__postFooter">
        {FeedPostIcon(ThumbUpAltIcon, "Like")}
        {FeedPostIcon(CommentIcon, "Comment")}
        {FeedPostIcon(ShareIcon, "Share")}
        {FeedPostIcon(SendIcon, "Send")}
      </div>
    </div>
  );
}

export default Post;
