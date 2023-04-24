function Post({ userId, title, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <small>{userId}</small>
    </div>
  );
}
export default Post;
