import calcFibonacciNums from "./calcFibonacciNums.mjs";

const updateFibonacciNumbersComponent = (event) => {
  let limit = document
    .querySelector("#fibonacci-numbers")
    .getAttribute("value");
  let newFibNumsList = calcFibonacciNums(limit);

  return (document.querySelector("#numbers").innerText = newFibNumsList);
};

export default updateFibonacciNumbersComponent;
