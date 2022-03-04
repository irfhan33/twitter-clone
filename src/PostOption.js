import "./postoption.css";
export default function PostOption({ Icon }) {
  return (
    <div className="postoption">
      {Icon && <Icon className="postoption__icon" />}
    </div>
  );
}
