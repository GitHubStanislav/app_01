function PostReducerList({ userId, title, body }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{body}</p>
      <small>{userId}</small>
    </div>
  );
}
export default PostReducerList;
