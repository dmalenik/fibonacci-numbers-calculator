import calcFibonacciNums from "./calcFibonacciNums.mjs";
import { fibonacciNumbersOutput } from "../../components/components-index.mjs";
import * as fibonacciNumbersOutputConfigs from "../../configs/fibonacciNumbersOutputConfigs.mjs";

const { sectionConfig, headingConfig } = fibonacciNumbersOutputConfigs;
const setFibonacciNumbersComponent = (event) => {
  let limit = document
    .querySelector("#fibonacci-numbers")
    .getAttribute("value");
  let fibonacciNumsList = calcFibonacciNums(limit);
  let fibonacciNumbers = fibonacciNumbersOutput(
    sectionConfig,
    headingConfig,
    fibonacciNumsList
  );

  return document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", fibonacciNumbers);
};

export default setFibonacciNumbersComponent;
