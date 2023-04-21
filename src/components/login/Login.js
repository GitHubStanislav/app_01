import { useState } from "react";
import "./Login.css";

function Login() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const [data, setData] = useState({ userName: "", password: "" });
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    setData({ ...data, password: "", userName: "" });
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label>
          UserName:
          <input
            type="text"
            value={data.userName}
            onChange={(e) => handleInputChange(e, "userName")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
