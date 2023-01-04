import { fibonacciNumbersForm } from "../components/components-index.mjs";
import * as fibonacciNumbersFormConfigs from "../configs/fibonacciNumbersFormConfigs.mjs";
import setEventListener from "../logic/setEventListener.mjs";
import * as eventHandlers from "../logic/event-handlers/event-handlers-index.mjs";

import normalize from "../assets/styles/normalize.css" assert { type: "css" };
import global from "../assets/styles/global.css" assert { type: "css" };
import utilities from "../assets/styles/utilities.css" assert { type: "css" };
import container from "../assets/styles/container.css" assert { type: "css" };

const { formConfig, inputConfig, labelConfig, buttonConfig } =
  fibonacciNumbersFormConfigs;
const { handleLimitNumber, handleFibonacciBtn } = eventHandlers;

// | PAGE SECTIONS

document
  .querySelector(".container")
  .insertAdjacentHTML(
    "afterbegin",
    fibonacciNumbersForm(formConfig, labelConfig, inputConfig, buttonConfig)
  );

// | EVENT LISTENERS

const addLimitNumberEventListener = setEventListener(
  "#fibonacci-numbers",
  "change",
  (e) => handleLimitNumber(e)
);

const addFibonacciBtnEventListener = setEventListener(
  "#fibonacci-button",
  "click",
  (e) => handleFibonacciBtn(e)
);

// | STYLES

document.adoptedStyleSheets = [normalize, global, utilities, container];
