import form from "../fragments/form.mjs";
import { setEventListener } from "../modules/events/event-listeners/event-listeners-index.mjs";
import {
  handleLimitNumber,
  handleFibonacciForm,
  handleFibonacciBtn,
} from "../modules/events/event-handlers/event-handlers-index.mjs";

const container = document.querySelector(".container");

// | PAGE SECTIONS

container.innerHTML = form;

// | EVENT LISTENERS

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
