import Form from '../elements/Form/Form'
import Label from '../elements/Label/Label'
import Input from '../elements/Input/Input'
import setInputValue from '../elements/Input/setInputValue'
import Button from '../elements/Button/Button'
import provideOutput from '../elements/Button/provideOutput'
import './Provider.styles.css'

const Provider = () => {
    Input.addEventListener('change', setInputValue)
    Button.addEventListener('click', provideOutput)

    Form.appendChild(Label)
    Form.appendChild(Input)
    Form.appendChild(Button)

    return Form
}

export default Provider
