import data from './button.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
// import handleInput from './handleInput'
import handleInputCopy from './handleInput.copy'

const button = createCustomizedElement(data)

button.addEventListener('click', handleInputCopy)

export default button
