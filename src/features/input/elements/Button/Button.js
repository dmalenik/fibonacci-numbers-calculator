import data from './Button.data.json'
import createCustomizedElement from '../../../shared/utils/createCustomizedElement'
import provideOutput from './provideOutput'

const Button = createCustomizedElement(data.name, data.attrs, data.children)

Button.addEventListener('click', provideOutput)

export default Button
