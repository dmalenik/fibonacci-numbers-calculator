import data from './button.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import handleInput from './handleInput'
import text from './button.text.json'

const button = createCustomizedElement(data)

button.innerText = text
button.addEventListener('click', handleInput)

export default button
