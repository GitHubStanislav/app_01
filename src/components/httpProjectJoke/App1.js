import axios from "axios";
import React, { useState } from "react";
import JokeList from "./components/JokeList";
import styles from "./App1.module.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJokesHandler = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_ten"
      );
      setJokes(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && <p>Jokes will be here:) )))</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
