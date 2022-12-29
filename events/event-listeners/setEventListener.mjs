const setEventListener = (targetName, eventName, eventHandler) =>
  document.querySelector(targetName).addEventListener(eventName, eventHandler);
  
export { setEventListener };
