const createButton = (form, type, id, children) =>
  `<button 
    form=${form} 
    type=${type} 
    id=${id} >
      ${children}
  </button>`;

export { createButton };
