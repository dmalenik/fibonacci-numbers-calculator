import { fibonacciNumbersForm } from "../components/fibonacciNumbersForm.mjs";

import normalize from "../assets/styles/normalize.css" assert { type: "css" };
import global from "../assets/styles/global.css" assert { type: "css" };
import utilities from "../assets/styles/utilities.css" assert { type: "css" };
import container from "../assets/styles/container.css" assert { type: "css" };
import form from "../assets/styles/form.css" assert { type: "css" };

// | PAGE SECTIONS

document.querySelector(".container").appendChild(fibonacciNumbersForm);

// | STYLES

document.adoptedStyleSheets = [normalize, global, utilities, container, form];

document
  .querySelector(".container")
  .classList.add("f-col", "f-x-center", "f-y-center");
