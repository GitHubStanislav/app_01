import { useState } from "react";
import FormUser from "./FormUser";
import UserList from "./UserList";

const CreateUser = () => {
  const [users, setUsers] = useState([]);
  const addUsersHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <div>
      <FormUser addUsers={addUsersHandler} />;
      <UserList users={users} />
    </div>
  );
};
export default CreateUser;
