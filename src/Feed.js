import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import Post from "./Post";
import { auth, db } from "./firebase";
import firebase from "firebase";

import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

import "./Feed.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });

    const timeout = setTimeout(() => setloading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      db.collection("posts").add({
        name: user.displayName,
        title: user.email,
        postText: inputText,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInputText("");
    }
  };

  const feedIcon = (Icon, title) => {
    return (
      <div className="feed__icon">
        <Icon className="feed__iconImage" />
        <span className="feed__iconTitle">{title}</span>
      </div>
    );
  };
  if (loading) {
    return <> </>;
  } else {
    return (
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__top">
            <Avatar className="feed__avatar" src={user.photoUrl}>
              {user.displayName[0].toUpperCase()}
            </Avatar>
            <form onSubmit={sendData}>
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                className="feed__input"
                placeholder="Start a post"
              />
            </form>
          </div>
          <div className="feed__bottom">
            {feedIcon(ImageIcon, "Photo")}
            {feedIcon(YouTubeIcon, "Video")}
            {feedIcon(EventIcon, "Event")}
            {feedIcon(DescriptionIcon, "Write article")}
          </div>
        </div>

        <div className="feed__line"></div>

        <div className="feed__postContainer">
          {posts.map(({ id, data: { name, title, postText, timestamp } }) => {
            return (
              <Post
                key={id}
                name={name}
                title={title}
                postText={postText}
                photoUrl={user.photoUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Feed;
