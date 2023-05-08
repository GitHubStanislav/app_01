import persons from "../data/persons";
import UserInfoCreateApp from "../createUserApp/UserInfoCreateApp";

function UsersList() {
  return (
    <div className="card_wrapper">
      {persons.map((person) => {
        return <UserInfoCreateApp key={person.id} {...person} />;
      })}
    </div>
  );
}

export default UsersList;
