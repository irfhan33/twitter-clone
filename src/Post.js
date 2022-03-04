import { Avatar } from "@mui/material";
import "./post.css";
import PostOption from "./PostOption";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useState } from "react";
import { db } from "./firebaseConfig";
import firebase from "firebase/app";

export default function Post() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const submitTweets = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar: user.photoURL || "",
      name: user.displayName,
      email: user.email,
      msg: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="post">
      <Avatar src={user.photoURL} className="avatar" />
      <div className="post__container">
        <form onSubmit={submitTweets}>
          <input
            type="text"
            placeholder="What's Happening"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="line"></div>
          <div className="post__footer">
            <div className="postOption__container">
              <PostOption Icon={InsertPhotoOutlinedIcon} />
              <PostOption Icon={GifBoxOutlinedIcon} />
              <PostOption Icon={InsertChartOutlinedTwoToneIcon} />
              <PostOption Icon={SentimentSatisfiedAltOutlinedIcon} />
              <PostOption Icon={DateRangeOutlinedIcon} />
            </div>
            <button type="submit">Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
}
