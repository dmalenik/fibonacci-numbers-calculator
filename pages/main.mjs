import form from "../fragments/form.mjs";
import * as eventListeners from "../events/event-listeners/event-listeners-index.mjs";
import * as eventHandlers from "../events/event-handlers/event-handlers-index.mjs";

const { setEventListener } = eventListeners;
const { handleFibonacciForm, handleLimitNumber, handleFibonacciBtn } =
  eventHandlers;

// | PAGE SECTIONS

document.querySelector(".container").insertAdjacentHTML("afterbegin", form);

// | FORM EVENT LISTENERS

const addFormEventListener = setEventListener(
  "#fibonacci-form",
  "submit",
  (e) => handleFibonacciForm(e)
);

const addLimitNumberEventListener = setEventListener(
  "#limit-number",
  "change",
  (e) => handleLimitNumber(e)
);

const addFibonacciBtnEventListener = setEventListener(
  "#fibonacci-button",
  "click",
  (e) => handleFibonacciBtn(e)
);
