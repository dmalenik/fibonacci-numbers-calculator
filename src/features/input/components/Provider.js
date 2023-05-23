import Form from '../elements/Form'
import Label from '../elements/Label'
import Input from '../elements/Input'
import Button from '../elements/Button'
import setInputValue from '../services/setInputValue'
import provideFibonacciNum from '../services/provideFibonacciNum'
import './provider.css'

const Provider = () => {
    const section = Form()

    const label = Label()
    section.appendChild(label)

    const input = Input()
    input.addEventListener('change', setInputValue)
    section.appendChild(input)

    const send = Button()
    send.addEventListener('click', provideFibonacciNum)
    section.appendChild(send)

    return section
}

export default Provider
