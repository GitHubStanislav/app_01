import "./Login.css";
function Login() {
  return (
    <form>
      <label>
        UserName:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
