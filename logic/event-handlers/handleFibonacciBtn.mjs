import setFibonacciNumbersComponent from "../setFibonacciNumbersComponent.mjs";
import updateFibonacciNumbersComponent from "../updateFibonacciNumbersComponent.mjs";

// this logic has to be on a server

let isMount = false;

const handleFibonacciBtn = (event) => {
  if (!isMount) {
    setFibonacciNumbersComponent(event);

    isMount = true;
  } else {
    updateFibonacciNumbersComponent(event);
  }
};

export { handleFibonacciBtn };
