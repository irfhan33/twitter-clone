import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebaseConfig";
import Feed from "./Feed";

function App() {
  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />
          <div className="appbody">
            <Navbar />
            <Feed />
          </div>
          <Rightbar />
        </div>
      )}
    </>
  );
}

export default App;
