import Form from '../elements/Form/Form'
import Label from '../elements/Label/Label'
import Input from '../elements/Input/Input'
import Button from '../elements/Button/Button'
import './Provider.styles.css'

const Provider = () => {
    Form.appendChild(Label)
    Form.appendChild(Input)
    Form.appendChild(Button)

    return Form
}

export default Provider
