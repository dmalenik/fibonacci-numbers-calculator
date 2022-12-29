import * as formElements from "../components/form/form-elements-index.mjs";

const { createInputField, createButton, createForm } = formElements;
const inputNumberField = createInputField(
  "Type a limit number",
  "limit-number",
  "number",
  "limit-number"
);
const sendButton = createButton(
  "fibonacci-form",
  "button",
  "fibonacci-button",
  "Send"
);
const form = createForm("", "", "fibonacci-form", [
  inputNumberField,
  sendButton,
]);

export default form;
