const fibonacciNumbersForm = document.createDocumentFragment();
const form = document.createElement("form");

form.setAttribute("id", "fibonacci-form");
form.setAttribute("method", "");
form.setAttribute("action", "");

const label = document.createElement("label");

label.setAttribute("for", "fibonacci-numbers");

label.innerText = "Type a number to see Fibonacci sequence numbers";

const input = document.createElement("input");

input.setAttribute("id", "fibonacci-numbers");
input.setAttribute("type", "number");
input.setAttribute("name", "fibonacci-numbers");

const send = document.createElement("button");

send.setAttribute("id", "fibonacci-button");
send.setAttribute("type", "button");
send.setAttribute("form", "fibonacci-form");

send.innerText = "Send";

form.appendChild(label);
form.appendChild(input);
form.appendChild(send);

fibonacciNumbersForm.append(form);

export { fibonacciNumbersForm };
