function UsersInfo(props) {
  const { id, firstName, lastName, email, img } = props;
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{id}</p>
      <p>{email}</p>
      <img src={img} alt="pictures" />
    </div>
  );
}

export default UsersInfo;
