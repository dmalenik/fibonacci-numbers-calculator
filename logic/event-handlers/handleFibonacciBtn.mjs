import { output } from "../../components/components-index.mjs";
import * as outputSettings from "../../configs/outputConfigs.mjs";
import calcFibonacciNums from "../../logic/calcFibonacciNums.mjs";

const { sectionSettings, headingSettings } = outputSettings;
const handleFibonacciBtn = (event) => {
  let limit = document
    .querySelector("#fibonacci-numbers")
    .getAttribute("value");
  let fibonacciNumsList = calcFibonacciNums(limit);
  let fibonacciNumbers = output(
    sectionSettings,
    headingSettings,
    fibonacciNumsList
  );

  return document
    .querySelector(".container")
    .insertAdjacentHTML("afterend", fibonacciNumbers);
};

export { handleFibonacciBtn };
