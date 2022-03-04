import "./trenditem.css";

export default function TrendItem({ category, hashtag, tweets }) {
  return (
    <div className="trenditem">
      <span>{category}</span>
      <h1>#{hashtag}</h1>
      <span>{tweets} Tweets</span>
    </div>
  );
}
