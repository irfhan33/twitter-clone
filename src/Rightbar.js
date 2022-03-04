import "./rightbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RightbarCard from "./RightbarCard";

export default function Rightbar() {
  const trends = [
    {
      category: "Trending in Indonesia",
      hashtag: "Lazada10Tahun",
      tweets: "1,778",
    },
    {
      category: "Sports",
      hashtag: "Manchester United",
      tweets: "4,778",
    },
    {
      category: "Business & finance",
      hashtag: "Gopay",
      tweets: "35,7k",
    },
    {
      category: "World War",
      hashtag: "Rusia vs Ukraina",
      tweets: "395,7k",
    },
  ];

  const follow = [
    {
      name: "Area Introvert",
      username: "@areaintrovertid",
      avatar:
        "https://pbs.twimg.com/profile_images/1482516257907908611/PpcMPksb_400x400.jpg",
    },
    {
      name: "Marshall Mathers",
      username: "@Eminem",
      avatar:
        "https://pbs.twimg.com/profile_images/1477000326213509125/Bx2Gkyjx_400x400.jpg",
    },
    {
      name: "Ruang Healing",
      username: "@RuangHealing",
      avatar:
        "https://pbs.twimg.com/profile_images/1458826056077430796/Ey-aGZ1B_400x400.jpg",
    },
  ];
  return (
    <div className="rightbar">
      <div className="search__container">
        <div className="search">
          <SearchIcon className="search__icon" />
          <input type="text" placeholder="Search on Twitter" />
        </div>
      </div>
      <RightbarCard
        title="Trends for you"
        Icon={SettingsOutlinedIcon}
        trends={trends}
      />
      <RightbarCard title="Who to follow" followRecomendation={follow} />
    </div>
  );
}
