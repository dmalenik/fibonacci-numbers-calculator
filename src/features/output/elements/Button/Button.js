import data from './Button.data.json'
import createCustomizedElement from '../../../../utils/createCustomizedElement'
import handleOutput from './handleOutput'

const Button = createCustomizedElement(data)

Button.addEventListener('click', handleOutput)

export default Button
