import data from './Button.data.json'
import createCustomizedElement from '../../../shared/utils/createCustomizedElement'
import handleOutput from './handleOutput'

const Button = createCustomizedElement(data.name, data.attrs, data.children)

Button.addEventListener('click', handleOutput)

export default Button
