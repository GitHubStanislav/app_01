import { useRef } from "react";
import styles from "./AddJoke.module.css";

const AddJoke = (props) => {
  const typeRef = useRef("");
  const setupRef = useRef("");
  const punchlineRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchline: punchlineRef.current.value,
    };
    props.onAddJoke(joke);
  };

  return (
    <form className={styles.control} onSubmit={submitHandler}>
      <div>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" ref={typeRef} />
      </div>
      <div>
        <label htmlFor="setup">Setup</label>
        <textarea rows={5} title="Setup" id="setup" ref={setupRef}></textarea>
      </div>
      <div>
        <label htmlFor="punchline">Punchline</label>
        <textarea
          rows={5}
          title="Punchline"
          id="punchline"
          ref={punchlineRef}
        ></textarea>
      </div>
      <button>Add Joke</button>
    </form>
  );
};
export default AddJoke;
