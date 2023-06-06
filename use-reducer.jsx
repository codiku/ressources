import { useReducer } from "react";
import {
  counterReducer,
  fetchRandomNumber,
  initCounter
} from "./counter-reducer";

export default function App() {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0, initCounter);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatchCounter({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatchCounter({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => dispatchCounter({ type: "reset" })}>Reset</button>
      <button
        onClick={() => dispatchCounter({ type: "customIncrement", payload: 3 })}
      >
        Increment 3
      </button>
      <button
        onClick={async () => {
          dispatchCounter({
            type: "customIncrement",
            payload: await fetchRandomNumber()
          });
        }}
      >
        Set random value from API
      </button>
    </div>
  );
}
