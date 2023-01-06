const fibonacciNumbersOutput = document.createDocumentFragment();
const output = document.createElement("section");

output.setAttribute("id", "output");

output.classList.add("w-100", "f-col", "f-y-center", "f-x-center");

const heading = document.createElement("h3");

heading.innerText = "The Fibonacci sequence numbers: ";

const numbers = document.createElement("p");

numbers.setAttribute("id", "numbers");

numbers.classList.add("w-100", "t-center");

const tryAgainBtn = document.createElement("button");

tryAgainBtn.setAttribute("id", "again");
tryAgainBtn.setAttribute("type", "button");

tryAgainBtn.innerText = "Try again";

tryAgainBtn.addEventListener("click", (event) => {
  output.classList.replace("f-col", "d-hidden");
  document
    .querySelector("#fibonacci-form")
    .classList.replace("d-hidden", "f-row");
});

output.appendChild(heading);
output.appendChild(numbers);
output.appendChild(tryAgainBtn);

fibonacciNumbersOutput.append(output);

export { fibonacciNumbersOutput };
