import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "./features/userSlice";
import { auth, facebookProvider, googleProvider } from "./firebase";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FcGoogle } from "react-icons/fc";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            photoUrl: userCredential.user.photoURL,
          })
        );
        // <Redirect to="/feed" />;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const googleLogin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            photoUrl: userCredential.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const facebookLogin = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            photoUrl: userCredential.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt="Linkedin"
      />
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button className="facebook__btn" onClick={facebookLogin}>
        <FacebookIcon />
        Login with facebook
      </button>
      <button className="google__btn" onClick={googleLogin}>
        <FcGoogle />
        Login with google
      </button>
    </div>
  );
}

export default Login;
