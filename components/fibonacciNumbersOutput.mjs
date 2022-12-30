const fibonacciNumbersOutput = (section, heading, text, children) =>
  `<section id=${section.id}>
    <h${heading.size}>${heading.text}</h${heading.size}>
    <p id=${text.id}>${children}</p>
  </section>`;

export { fibonacciNumbersOutput };
