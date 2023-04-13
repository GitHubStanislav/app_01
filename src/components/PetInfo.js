function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is 3 years ${age}`
    : "I don't have any pets";

  return <h1>{text}</h1>;
}

export default PetInfo;
