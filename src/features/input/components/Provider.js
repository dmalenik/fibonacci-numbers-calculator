import Form from '../elements/Form/Form'
import Label from '../elements/Label/Label'
import Input from '../elements/Input/Input'
import Button from '../elements/Button/Button'
import setInputValue from '../services/setInputValue'
import provideFibonacciNum from '../services/provideFibonacciNum'
import './Provider.styles.css'

const Provider = () => {
    Input.addEventListener('change', setInputValue)
    Button.addEventListener('click', provideFibonacciNum)

    Form.appendChild(Label)
    Form.appendChild(Input)
    Form.appendChild(Button)

    return Form
}

export default Provider
