import persons from "../data/persons";
import UsersInfo from "./UsersInfo";
import "./CardWrapper.css";
function UsersList() {
  return (
    <div className="card_wrapper">
      {persons.map((person) => {
        return <UsersInfo key={person.id} {...person} />;
      })}
    </div>
  );
}

export default UsersList;
