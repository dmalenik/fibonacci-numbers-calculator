import form from "../fragments/form.mjs";
import { setEventListener } from "../modules/event-listeners/event-listeners.mjs";

const container = document.querySelector(".container");

container.innerHTML = form;

const addFibonacciLimitButtonEventListener = setEventListener(
  "#fibonacci-limit-button",
  "click",
  () => console.log("Hello, world!")
);
