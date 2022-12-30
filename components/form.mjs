const form = (form, label, input, button) =>
  `<form 
    id=${form.id} 
    method=${form.method} 
    action=${form.action}>
      <label for=${input.id}>${label.name}</label>
      <input id=${input.id} type=${input.type} name=${input.name} />
      <button id=${button.id} type=${button.type} form=${form.id}>${button.children}</button>
  </form>`;

export { form };
