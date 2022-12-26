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
  "fibonacci-limit-form",
  "button",
  "fibonacci-limit-button",
  "Send"
);
const form = createForm("fibonacci-limit-form", "fibonacci-limit", "get", [
  inputNumberField,
  sendButton,
]).replace(/>,/gi, "> ");

export default form;
