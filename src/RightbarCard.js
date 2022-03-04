import TrendItem from "./TrendItem";
import "./rightbarcard.css";
import ShowMore from "./ShowMore";
import FollowRecomendation from "./FollowRecomendation";

export default function RightbarCard({
  title,
  Icon,
  trends,
  followRecomendation,
}) {
  return (
    <div className="rightbarcard">
      <div className="rightbarcard__header">
        <h1>{title}</h1>
        {Icon && <Icon />}
      </div>
      {trends &&
        trends.map(({ category, hashtag, tweets }) => (
          <TrendItem
            key={category}
            category={category}
            hashtag={hashtag}
            tweets={tweets}
          />
        ))}
      {followRecomendation &&
        followRecomendation.map(({ avatar, username, name }) => (
          <FollowRecomendation
            key={username}
            avatar={avatar}
            username={username}
            name={name}
          />
        ))}
      <ShowMore />
    </div>
  );
}
