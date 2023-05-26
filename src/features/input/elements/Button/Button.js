import data from './Button.data.json'
import createCustomizedElement from '../../../../utils/createCustomizedElement'
import handleInput from './handleInput'

const Button = createCustomizedElement(data.name, data.attrs, data.children)

Button.addEventListener('click', handleInput)

export default Button
