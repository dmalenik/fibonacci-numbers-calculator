const createInputField = (labelName, inputName, type, id) => {
  return `<label for=${id}>\n
      ${labelName}:\n 
    </label>\n
    <input name=${inputName} type=${type} id=${id} />`;
};

export { createInputField };
