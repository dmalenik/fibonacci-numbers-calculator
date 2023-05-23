const Input = () => {
    const element = document.createElement('input')

    element.setAttribute('id', 'input-number')
    element.setAttribute('type', 'number')
    element.setAttribute('name', 'input-number')
    element.setAttribute('min', 0)

    return element
}

export default Input
