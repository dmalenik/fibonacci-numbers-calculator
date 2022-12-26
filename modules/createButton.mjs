const createButton = (form, type, id, children) => {
  return `<button form=${form} type=${type} id=${id}>${children}</button>`;
};

export default createButton;
