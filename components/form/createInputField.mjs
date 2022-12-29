const createInputField = (labelName, inputName, type, id) =>
  `<label for=${id}>
      ${labelName}:
    </label>
    <input
      name=${inputName} 
      type=${type} 
      id=${id} />`;

export { createInputField };
