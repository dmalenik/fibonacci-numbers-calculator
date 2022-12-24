import createForm from "./createForm.mjs";
import createInputField from "./createInputField.mjs";
import createButton from "./createButton.mjs";

const inputNumberField = createInputField(
  "Type a limit number",
  "number",
  "limit-number"
);
const submitButton = createButton(
  "fibonacci-limit",
  "button",
  "Send a limit number"
);
const form = createForm("fibonacci-limit", "fibonacci-limit", "post", [
  inputNumberField,
  submitButton,
]).replace(/>,/gi, "> ");

export default form;
