import createSection from "../../components/createSection.mjs";
import displayFibonacciNums from "../../components/output/displayFibonacciNums.mjs";
import calcFibonacciNums from "../../logic/calcFibonacciNums.mjs";

const handleFibonacciBtn = (event) => {
  let limit = document.querySelector("#limit-number").getAttribute("value");
  let fibonacciNumsList = calcFibonacciNums(limit);
  let fibonacciNumbers = displayFibonacciNums(fibonacciNumsList);
  let output = createSection(
    3,
    `Fibonacci numbers up to ${limit}`,
    fibonacciNumbers
  );

  return document
    .querySelector(".container")
    .insertAdjacentHTML("afterend", output);
};

export { handleFibonacciBtn };
