import { useEffect, useState } from "react";

const EffectExplore = () => {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // useEffect for counter app
  useEffect(() => {
    if (count === 10) alert("counter reached 10!");
  }, [count]);

  return (
    <>
      <div className="container">
        <h1 style={{ backgroundColor: "blue", color: "white" }}>
          Fetch User Data
        </h1>
        <h2> User : {user.length}</h2>
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              Name : {user.name} <br /> Email : {user.email}
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <h1 style={{ backgroundColor: "blue", color: "white" }}>
          Task 1: Counter Alert
        </h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button
          onClick={() => {
            count > 0 && setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default EffectExplore;
