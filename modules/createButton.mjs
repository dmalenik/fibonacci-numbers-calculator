const createButton = (form, type, children) => {
  return `<button form=${form} type=${type}>${children}</button>`;
};

export default createButton;
