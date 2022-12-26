const createForm = (id, children) => {
  return `<form id=${id}>${children.map((child) => child)}`;
};

export { createForm };
