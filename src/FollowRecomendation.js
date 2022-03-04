import { Avatar } from "@mui/material";
import "./followrecomendation.css";

export default function FollowRecomendation({ avatar, username, name }) {
  return (
    <div className="followrecomendation">
      <Avatar src={avatar} className="avatar" />
      <div className="detail">
        <h5>{name}</h5>
        <span>{username}</span>
      </div>
      <button>Follow</button>
    </div>
  );
}
