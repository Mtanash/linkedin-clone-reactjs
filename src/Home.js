import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__header">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png"
              alt="linkedin clone"
            />
          </div>
          <div className="buttons">
            <Link to="/register">
              <button className="joinBtn">join now</button>
            </Link>
            <Link to="/login">
              <button className="signinBtn">Sign in</button>
            </Link>
          </div>
        </div>

        <div className="home__body">
          <h1>Welcome to Linkedin Clone.</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
