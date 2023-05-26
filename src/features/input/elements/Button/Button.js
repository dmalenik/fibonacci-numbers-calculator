import data from './Button.data.json'
import createCustomizedElement from '../../utils/createCustomizedElement'

const Button = createCustomizedElement(data.name, data.attrs, data.children)

export default Button
