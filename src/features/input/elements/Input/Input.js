import data from './Input.data.json'
import createCustomizedElement from '../../../../utils/createCustomizedElement'
import setInputValue from './setInputValue'

const Input = createCustomizedElement(data.name, data.attrs, data.children)

Input.addEventListener('change', setInputValue)

export default Input
