import {
  createForm,
  createInputField,
  createButton,
} from "../modules/form/form-elements.mjs";

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
