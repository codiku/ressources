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







import axios from "axios";

function initCounter(initialValue) {
  return initialValue;
}

async function fetchRandomNumber() {
  const { data } = await axios(
    "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain"
  );
  return data;
}
function counterReducer(currentState, action) {
  switch (action.type) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return 0;
    case "customIncrement":
      return currentState + action.payload;
    default:
      return currentState;
  }
}

export { initCounter, counterReducer, fetchRandomNumber };
