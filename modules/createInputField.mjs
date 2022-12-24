const createInputField = (labelName, inputName, type, id) => {
  return `<label for=${id}>\n
      ${labelName}:\n 
      <input name=${inputName} type=${type} id=${id} />\n
    </label>`;
};

export default createInputField;
