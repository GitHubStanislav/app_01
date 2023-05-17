import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import JokeList from "./components/JokeList";
import styles from "./App1.module.css";
import AddJoke from "./components/AddJoke";

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchJokesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_ten"
      );
      setJokes(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchJokesHandler();
  }, [fetchJokesHandler]);

  const addJokeHandler = (joke) => {
    console.log(joke);
  };

  return (
    <>
      <section>
        <AddJoke onAddJoke={addJokeHandler} />
      </section>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && <p>Jokes will be here:)))</p>}
        {isError && <p>Error: {isError.message}</p>}
        {isLoading && !isError && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
