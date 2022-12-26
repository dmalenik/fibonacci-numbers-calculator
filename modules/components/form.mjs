import createForm from "../createForm.mjs";
import createInputField from "../createInputField.mjs";
import createButton from "../createButton.mjs";

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
