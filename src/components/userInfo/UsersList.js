import persons from "../data/persons";
import UsersInfo from "./UsersInfo";
function UsersList() {
  return (
    <div>
      {persons.map((person) => {
        return <UsersInfo key={person.id} {...person} />;
      })}
    </div>
  );
}

export default UsersList;
