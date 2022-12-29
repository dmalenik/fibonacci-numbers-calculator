// apply internal logic to values
const createForm = (method, action, id, children) =>
  `<form 
    id=${id} 
    method=${method === "" ? "get" : method} 
    action=${action === "" ? "" : action} >
      ${children.join(" ")}
  </form>`;

export { createForm };
