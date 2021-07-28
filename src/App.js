import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <Switch>
        <div className="app">
          {user ? (
            <Redirect to="/feed" />
          ) : (
            <Route exact path="/">
              <Home />
            </Route>
          )}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/feed">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
