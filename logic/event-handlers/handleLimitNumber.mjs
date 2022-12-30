const handleLimitNumber = (event) =>
  document
    .querySelector("#fibonacci-numbers")
    .setAttribute("value", event.target.value);

export { handleLimitNumber };
