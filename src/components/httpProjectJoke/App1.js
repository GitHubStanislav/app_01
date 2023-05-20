import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import JokeList from "./components/JokeList";
import AddJoke from "./components/AddJoke";

function App() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchJokesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://react-cource-http-b1835-default-rtdb.firebaseio.com/jokes.json"
      );
      const loadedJokes = [];
      for (const key in response.data) {
        loadedJokes.push({
          id: key,
          type: response.data[key].type,
          setup: response.data[key].setup,
          punchline: response.data[key].punchline,
        });
      }

      setJokes(loadedJokes);

      console.log(loadedJokes);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchJokesHandler();
  }, [fetchJokesHandler]);

  const addJokeHandler = async (joke) => {
    setIsLoading(true);
    try {
      await axios.post(
        "https://react-cource-http-b1835-default-rtdb.firebaseio.com/jokes.json",
        JSON.stringify(joke)
      );
      setIsLoading(false);
      // Дополнительные действия, если требуется после успешного добавления шутки
    } catch (error) {
      setIsError(error);
      setIsLoading(false);
      console.error(error);
    }
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
        {!isLoading && jokes.length > 0 ? (
          <JokeList jokes={jokes} />
        ) : (
          <p>Jokes will be here:)))</p>
        )}
        {isError && <p>Error: {isError.message}</p>}
        {isLoading && !isError && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
