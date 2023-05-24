import data from './input.json'
import createCustomizedElement from '../../utils/createCustomizedElement' 

const Input = createCustomizedElement(data.name, data.attrs, data.children)

export default Input
