import calcFibonacciNumbs from "../calcFibonacciNums.mjs";
import { fibonacciNumbersOutput } from "../../components/components-index.mjs";

// this logic has to be on a server

let isMount = false;

const handleFibonacciBtn = (event) => {
  if (!isMount) {
    document.querySelector(".container").appendChild(fibonacciNumbersOutput);

    let limit = document
      .querySelector("#fibonacci-numbers")
      .getAttribute("value");
    let fibonacciNumbers = calcFibonacciNumbs(limit);

    document.querySelector("#numbers").innerText = fibonacciNumbers.join(" ");

    isMount = true;
  } else {
    let limit = document
      .querySelector("#fibonacci-numbers")
      .getAttribute("value");
    let fibonacciNumbers = calcFibonacciNumbs(limit);

    document.querySelector("#numbers").innerText = fibonacciNumbers.join(" ");
  }
};

export { handleFibonacciBtn };
