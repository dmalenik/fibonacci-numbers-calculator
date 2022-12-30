const output = (sectionSettings, headingSettings, children) =>
  `<section id=${sectionSettings.id}>
    <h${headingSettings.size}>${headingSettings.text}</h${headingSettings.size}>
    ${children}
  </section>`;

export { output };
