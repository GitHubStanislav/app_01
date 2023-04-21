import { useState } from "react";
import "./Login.css";
function LoginTest(props) {
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
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>{props.children} </h2>
        <label>
          Name
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>submit</button>
      </form>
    </>
  );
}

export default LoginTest;
