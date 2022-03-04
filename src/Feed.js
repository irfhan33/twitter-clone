import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import Post from "./Post";
import Tweets from "./Tweets";
export default function Feed({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <>
      <Post />
      {posts.map(({ id, data: { name, email, msg, avatar } }) => (
        <Tweets key={id} name={name} email={email} msg={msg} avatar={avatar} />
      ))}
    </>
  );
}
