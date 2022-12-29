const createSection = (headingSize, headingText, children) =>
  `<section>
    <h${headingSize}>${headingText}</h${headingSize}>
    ${children}
  </section>`;

export default createSection;
