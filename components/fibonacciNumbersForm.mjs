import calcFibonacciNums from "../logic/calcFibonacciNums.mjs";
import { fibonacciNumbersOutput } from "./fibonacciNumbersOutput.mjs";

const fibonacciNumbersForm = document.createDocumentFragment();
const form = document.createElement("form");

form.setAttribute("id", "fibonacci-form");
form.setAttribute("method", "");
form.setAttribute("action", "");

form.classList.add("f-row", "f-col-gap");

const label = document.createElement("label");

label.setAttribute("for", "fibonacci-numbers");

label.innerText = "Type a number to see Fibonacci sequence numbers:";

const input = document.createElement("input");

input.setAttribute("id", "fibonacci-numbers");
input.setAttribute("type", "number");
input.setAttribute("name", "fibonacci-numbers");

input.addEventListener("change", (event) =>
  event.target.setAttribute("value", event.target.value)
);

const send = document.createElement("button");

send.setAttribute("id", "fibonacci-button");
send.setAttribute("type", "button");
send.setAttribute("form", "fibonacci-form");

send.innerText = "Send";

let isMount = false;

send.addEventListener("click", (event) => {
  let limit = document
    .querySelector("#fibonacci-numbers")
    .getAttribute("value");
  let fibonacciNumbers = calcFibonacciNums(limit);

  if (isMount === false) {
    document
      .querySelector("#fibonacci-form")
      .classList.replace("f-row", "d-hidden");
    document.querySelector(".container").appendChild(fibonacciNumbersOutput);
    document.querySelector(
      "#output h3"
    ).innerText = `The Fibonacci sequence numbers up to the limit ${limit} are: `;

    isMount = true;
  } else {
    document
      .querySelector("#fibonacci-form")
      .classList.replace("f-row", "d-hidden");
    document.querySelector("#output").classList.replace("d-hidden", "f-col");
    document.querySelector(
      "#output h3"
    ).innerText = `The Fibonacci sequence numbers up to the limit ${limit} are: `;
  }

  document.querySelector("#numbers").innerText = fibonacciNumbers.join(" ");
});

form.appendChild(label);
form.appendChild(input);
form.appendChild(send);

fibonacciNumbersForm.append(form);

export { fibonacciNumbersForm };
