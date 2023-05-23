const Button = () => {
    const element = document.createElement('button')

    element.setAttribute('id', 'fibonacci-button')
    element.setAttribute('type', 'button')
    element.setAttribute('form', 'fibonacci-form')

    element.innerText = 'Send'

    return element
}

export default Button
