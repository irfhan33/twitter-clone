import "./login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    name: "",
    profile: "",
    email: "",
    password: "",
  });
  const registerAccount = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(fields.email, fields.password)
      .then((userAuth) => {
        userAuth
          .updateProfile({
            displayName: fields.name,
            photoURL: fields.profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(fields.email, fields.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const fieldsHandler = (e) => {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <div className="login__image">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt=""
        />
        <TwitterIcon className="login__twittericon" />
      </div>
      <div className="login__form">
        <TwitterIcon className="login__formicon" />
        <h1>Happening now</h1>
        <h5>Join Twitter Today.</h5>
        <form onSubmit={registerAccount}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={fieldsHandler}
          />
          <input
            type="text"
            placeholder="Profile"
            name="profile"
            onChange={fieldsHandler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={fieldsHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={fieldsHandler}
          />
          <button type="submit">Sign Up</button>
          <p>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <h5>Already have an account?</h5>
          <a onClick={loginApp}>Sign in</a>
        </form>
      </div>
    </div>
  );
}
