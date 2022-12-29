import calcFibonacciNums from "../../calcFibonacciNums.mjs";

const handleFibonacciBtn = (event) => {
  let limit = document.querySelector("#limit-number").getAttribute("value");

  calcFibonacciNums(limit);
};

export { handleFibonacciBtn };
