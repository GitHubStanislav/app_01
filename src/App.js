import "./App.css";
import PetInfo from "./components/PetInfo";
import RandomNumber from "./components/RandomNamber";

function App() {
    return (<div className="App">
        <PetInfo animal="cat" age="15" hasPet={true}/>
        <PetInfo animal="dog" age={25} hasPet={false}/>
        <RandomNumber/>
    </div>);
}

export default App;
