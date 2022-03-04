import "./sidebar.css";
import SidebarMenu from "./SidebarMenu";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebaseConfig";

export default function Sidebar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout);
    auth.signOut();
  };
  return (
    <div className="sidebar">
      <div className="sidebarmenu__container">
        <SidebarMenu Icon={TwitterIcon} />
        <SidebarMenu Icon={HomeIcon} title="Home" />
        <SidebarMenu Icon={SearchIcon} title="Search" />
        <SidebarMenu Icon={NotificationsNoneIcon} title="Notifications" />
        <SidebarMenu Icon={MailOutlineIcon} title="Messages" />
        <SidebarMenu Icon={BookmarkBorderIcon} title="Booksmarks" />
        <SidebarMenu Icon={ArticleOutlinedIcon} title="Lists" />
        <SidebarMenu Icon={PersonOutlinedIcon} title="Profile" />
      </div>
      <div className="avatar__container" onClick={logoutApp}>
        <Avatar src={user.photoURL} className="avatar" />
        <div className="detaill">
          <span>{user.displayName}</span>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
