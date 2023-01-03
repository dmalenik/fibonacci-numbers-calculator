import { fibonacciNumbersForm } from "../components/components-index.mjs";
import * as fibonacciNumbersFormConfigs from "../configs/fibonacciNumbersFormConfigs.mjs";
import setEventListener from "../logic/setEventListener.mjs";
import * as eventHandlers from "../logic/event-handlers/event-handlers-index.mjs";

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

// | FORM EVENT LISTENERS

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
