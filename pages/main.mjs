import form from "../fragments/form.mjs";
import calcFibonacciNums from "../modules/calcFibonacciNums.mjs";
import { setEventListener } from "../modules/event-listeners/event-listeners.mjs";

const container = document.querySelector(".container");

// | PAGE SECTIONS

container.innerHTML = form;

// | EVENT LISTENERS

const addFormEventListener = setEventListener(
  "#fibonacci-form",
  "submit",
  (e) => handleFibonacciForm(e)
);

function handleFibonacciForm(event) {
  event.preventDefault();
  console.log("The form is submitted!");
}

const addLimitNumberEventListener = setEventListener(
  "#limit-number",
  "change",
  (e) => handleLimitNumber(e)
);

function handleLimitNumber(event) {
  document
    .querySelector("#limit-number")
    .setAttribute("value", event.target.value);
}

const addFibonacciBtnEventListener = setEventListener(
  "#fibonacci-button",
  "click",
  (e) => handleFibonacciBtn(e)
);

function handleFibonacciBtn(event) {
  let limit = document.querySelector("#limit-number").getAttribute("value");

  calcFibonacciNums(limit);
}
