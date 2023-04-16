function PersonMap1({ firstName, lastName, email, id, img }) {
  // const {firstName, lastName, email, id, img} = props
  // робимо деструктуризацію у змінній або одразу в параметрах
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <ul>
        <li>{email}</li>
        <li>{id}</li>
      </ul>
      <img src={img} alt={"pictures"} />
    </div>
  );
}

export default PersonMap1;
