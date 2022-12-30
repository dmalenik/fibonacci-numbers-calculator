import calcFibonacciNums from "./calcFibonacciNums.mjs";
import { fibonacciNumbersOutput } from "../../components/components-index.mjs";
import * as fibonacciNumbersOutputConfigs from "../../configs/fibonacciNumbersOutputConfigs.mjs";

const { sectionConfig, headingConfig, textConfig } =
  fibonacciNumbersOutputConfigs;
const setFibonacciNumbersComponent = (event) => {
  let limit = document
    .querySelector("#fibonacci-numbers")
    .getAttribute("value");
  let fibonacciNumsList = calcFibonacciNums(limit);
  let output = fibonacciNumbersOutput(
    sectionConfig,
    headingConfig,
    textConfig,
    fibonacciNumsList
  );

  return document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", output);
};

export default setFibonacciNumbersComponent;
