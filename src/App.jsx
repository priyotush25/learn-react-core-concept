import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const resetHandle = () => {
    setCount(0);
  };

  const inputHandle = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>Practice Task 1: Simple Counter</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>
          Increase
        </button>
        <button onClick={resetHandle}>Reset</button>
      </div>

      <div className="container">
        <h1>Practice Task 2: Input Mirror</h1>
        <h2>You Typed : {text}</h2>
        <input value={text} type="text" onChange={inputHandle} />
      </div>
    </>
  );
}

export default App;
