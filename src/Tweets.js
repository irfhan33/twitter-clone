import "./tweets.css";
import { Avatar } from "@mui/material";
import TweetOption from "./TweetOption";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
export default function Tweets({ name, email, msg, avatar }) {
  return (
    <div className="tweets">
      <Avatar src={avatar} className="tweets__avatar" />
      <div className="tweets__user">
        <div className="tweets__userHeader">
          <h5>{name}</h5>
          <span>{email}</span>
        </div>
        <p>{msg}</p>
        <div className="tweets__option">
          <TweetOption Icon={ModeCommentOutlinedIcon} amount="248" />
          <TweetOption Icon={AutorenewOutlinedIcon} amount="3.925" />
          <TweetOption Icon={FavoriteBorderOutlinedIcon} amount="15.4K" />
          <TweetOption Icon={IosShareOutlinedIcon} />
        </div>
      </div>
    </div>
  );
}
