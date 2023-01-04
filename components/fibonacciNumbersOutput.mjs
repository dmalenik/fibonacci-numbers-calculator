const fibonacciNumbersOutput = document.createDocumentFragment();
const output = document.createElement("section");

output.setAttribute("id", "output");

output.classList.add("w-100", "f-col", "f-y-center", "f-x-center");

const heading = document.createElement("h3");

heading.innerText = "The Fibonacci sequence numbers: ";

const numbers = document.createElement("p");

numbers.setAttribute("id", "numbers");

numbers.classList.add("w-100", "t-center");

output.appendChild(heading);
output.appendChild(numbers);

fibonacciNumbersOutput.append(output);

export { fibonacciNumbersOutput };
