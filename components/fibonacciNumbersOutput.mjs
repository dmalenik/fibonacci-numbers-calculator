const fibonacciNumbersOutput = (section, heading, children) =>
  `<section id=${section.id}>
    <h${heading.size}>${heading.text}</h${heading.size}>
    ${children}
  </section>`;

export { fibonacciNumbersOutput };
