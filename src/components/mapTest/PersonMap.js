import persons from "./persons";

function PersonMap() {
  return (
    <div className={"counter_map"}>
      {persons.map((person) => {
        const { firstName, lastName, id, email, img } = person;
        return (
          <div>
            <h3>
              {firstName} {lastName}
            </h3>
            <ul>
              <li>{id}</li>
              <li>{email}</li>
            </ul>
            <img src={img} alt={"pictures"} />
          </div>
        );
      })}
    </div>
  );
}

export default PersonMap;
