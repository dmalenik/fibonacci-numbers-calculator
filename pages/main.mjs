import form from "../modules/components/form.mjs";
import setEventListener from "../modules/setEventListener.mjs";

const container = document.querySelector(".container");

container.innerHTML = form;

const addFibonacciLimitButtonEventListener = setEventListener(
  "#fibonacci-limit-button",
  "click",
  () => console.log("Hello, world!")
);
