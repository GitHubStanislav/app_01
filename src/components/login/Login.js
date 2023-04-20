import { useState } from "react";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: userName,
      password: password,
    };
    console.log(userData);
    setPassword("");
    setUserName("");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label>
          UserName:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
