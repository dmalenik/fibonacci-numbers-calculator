const createCustomizedElement = ({ name, attrs, children }) => {
    const element = document.createElement(name)

    if (Object.entries(attrs).length) {
        Object.entries(attrs).forEach((attr) => {
            element.setAttribute(attr[0], attr[1])
        })
    }

    element.innerText = children

    return element
}

export default createCustomizedElement
