const createForm = (id, name, method, children) => {
  return `<form method=${method} name=${name} id=${id}>${children.map(
    (child) => child
  )}`;
};

export { createForm };
