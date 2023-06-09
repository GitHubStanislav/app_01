import { useState, useEffect } from "react";

function UseEffectExample() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <button onClick={() => setResourceType("posts")}>post</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourceType}</h1>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)} </pre>;
      })}
    </>
  );
}
export default UseEffectExample;
