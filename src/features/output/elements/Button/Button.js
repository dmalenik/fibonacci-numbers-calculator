import data from './Button.data.json'
import createCustomizedElement from '../../../shared/utils/createCustomizedElement'
import returnInput from './returnInput'

const Button = createCustomizedElement(data.name, data.attrs, data.children)

Button.addEventListener('click', returnInput)

export default Button
