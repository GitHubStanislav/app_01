import persons from "./persons";

function PersonMap() {
  return (
    <div className={"counter_map"}>
      {persons.map((person) => {
        return (
          <div>
            <h3>
              {person.firstName} {person.lastName}
            </h3>
            <ul>
              <li>{person.id}</li>
              <li>{person.email}</li>
            </ul>
            <img src={person.img} alt={"pictures"} />
          </div>
        );
      })}
    </div>
  );
}

export default PersonMap;
