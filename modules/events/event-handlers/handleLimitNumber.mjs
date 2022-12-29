const handleLimitNumber = (event) =>
  document
    .querySelector("#limit-number")
    .setAttribute("value", event.target.value);

export { handleLimitNumber };
