import "./PetInfo.css";
function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is 3 years ${age}`
    : "I don't have any pets";

  return (
    <div className="wrapper">
      <h1>{text}</h1>
    </div>
  );
}

export default PetInfo;
