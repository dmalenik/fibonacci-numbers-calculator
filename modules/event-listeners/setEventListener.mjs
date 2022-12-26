const setEventListener = (targetName, eventName, eventHandler) => {
  return document
    .querySelector(targetName)
    .addEventListener(eventName, eventHandler);
};

export { setEventListener };
