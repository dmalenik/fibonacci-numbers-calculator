const fibonacciNumbersOutput = document.createDocumentFragment();
const section = document.createElement("section");

section.setAttribute("id", "output");

const heading = document.createElement("h3");

heading.innerText = "The Fibonacci sequence numbers: ";

const p = document.createElement("p");

p.setAttribute("id", "numbers");

section.appendChild(heading);
section.appendChild(p);

fibonacciNumbersOutput.append(section);

export { fibonacciNumbersOutput };
