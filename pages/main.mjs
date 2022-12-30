import { form } from "../components/components-index.mjs";
import * as formComponentSettings from "../configs/formConfigs.mjs";
import setEventListener from "../logic/setEventListener.mjs";
import * as eventHandlers from "../logic/event-handlers/event-handlers-index.mjs";

const { formSettings, inputSettings, labelSettings, buttonSettings } =
  formComponentSettings;
const { handleLimitNumber, handleFibonacciBtn } = eventHandlers;

// | PAGE SECTIONS

document
  .querySelector(".container")
  .insertAdjacentHTML(
    "afterbegin",
    form(formSettings, labelSettings, inputSettings, buttonSettings)
  );

// | FORM EVENT LISTENERS

const addLimitNumberEventListener = setEventListener(
  "#fibonacci-numbers",
  "change",
  (e) => handleLimitNumber(e)
);

const addFibonacciBtnEventListener = setEventListener(
  "#fibonacci-button",
  "click",
  (e) => handleFibonacciBtn(e)
);
