const createCustomizedElement = ({ name, attrs }) => {
    const element = document.createElement(name);

    if (Object.entries(attrs).length) {
        Object.entries(attrs).forEach(attr => {
            element.setAttribute(attr[0], attr[1]);
        });
    }

    return element;
};

const changeClass = (elem, base, target) => elem.classList.replace(base, target);

export { createCustomizedElement, changeClass };