import { useEffect, useState } from "react";
import PostAsync from "./PostAsync";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
function PostsAsync() {
  const [posts1, setPosts1] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts1 = await res.json();
        setPosts1(posts1);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    })();
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setPosts1(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setLoading(false));
  // }, []);

  if (error) {
    return <h1>Error:{error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      <hr />
      <div className="card_wrapper">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts1.map((post) => <PostAsync key={post.id} {...post} />)
        )}
      </div>
    </>
  );
}

export default PostsAsync;
