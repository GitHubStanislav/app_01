import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormUser = ({ addUsers }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: name,
      age: age,
      id: uuidv4(),
    };
    addUsers(userInfo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">
        Name
        <input
          id="name-input"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
        />
      </label>
      <label htmlFor="age-input">
        Age
        <input
          id="age-input"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          type="number"
        />
      </label>
      <button type="submit">PUSH!</button>
    </form>
  );
};

export default FormUser;
