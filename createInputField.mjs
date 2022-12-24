const createInputField = (labelName, type, id) => {
  return `<label>${labelName}: <input type=${type} id=${id} /></label>`;
};

export default createInputField;
