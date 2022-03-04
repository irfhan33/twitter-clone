import "./tweetoption.css";
export default function TweetOption({ Icon, amount }) {
  return (
    <div className="tweetoption">
      {Icon && <Icon className="tweetoption__icon" />}
      {amount && <span>{amount}</span>}
    </div>
  );
}
