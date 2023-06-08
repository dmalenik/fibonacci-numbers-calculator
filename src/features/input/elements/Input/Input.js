import data from './input.data.json'
import createCustomizedElement from '../../../../utils/DOMElementUtils'
import setInputValue from './setInputValue'

const input = createCustomizedElement(data)

input.addEventListener('change', setInputValue)

export default input
