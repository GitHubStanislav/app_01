import UserInfoCreateApp from "./UserInfoCreateApp";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <UserInfoCreateApp key={user.id} {...user} />;
      })}
    </div>
  );
};
export default UserList;
