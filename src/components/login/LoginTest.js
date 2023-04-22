import { useState } from "react";
import "./Login.css";
function LoginTest({ children }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
    setUserName("");
    setPassword("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>{children} </h2>
      <label htmlFor="userName">
        Name
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button>submit</button>
    </form>
  );
}

export default LoginTest;
