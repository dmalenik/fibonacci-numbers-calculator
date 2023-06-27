const createCustomizedElement = ({ name, attrs }) => {
    const element = document.createElement(name)

    if (attrs.length) {
        attrs.forEach(({ key, value }) => {
            element.setAttribute(key, value)
        })
    }

    return element
}

const changeClass = (elem, base, target) => elem.classList.replace(base, target)

export { createCustomizedElement, changeClass }
