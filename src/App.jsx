import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const resetHandle = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Increase</button>
      <button onClick={resetHandle}>Reset</button>
    </>
  );
}

export default App;
