import Form from '../elements/Form'
import Label from '../elements/Label'
import Input from '../elements/Input'
import Button from '../elements/Button'
import setInputValue from '../services/setInputValue'
import provideFibonacciNum from '../services/provideFibonacciNum'
import '../assets/styles/provider.css'

const Provider = () => {
    Input.addEventListener('change', setInputValue)
    Button.addEventListener('click', provideFibonacciNum)

    Form.appendChild(Label)
    Form.appendChild(Input)
    Form.appendChild(Button)

    return Form
}

export default Provider
