import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="15" />
      <PetInfo animal="dog " age={25} />
    </div>
  );
}

export default App;
