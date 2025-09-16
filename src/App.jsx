import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(false);

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
        <input
          type="text"
          value={text}
          // onChange={(e) => setText(e.target.value)}
          onChange={inputHandle}
        />
      </div>

      <div className="container">
        <h1>Practice Task 3: Toggle Button</h1>
        <h2>{isOn ? "ON" : "OFF"}</h2>
        <button onClick={() => setIsOn(true)}>ON</button>
        <button onClick={() => setIsOn(false)}>OFF</button>
      </div>
    </>
  );
}

export default App;
