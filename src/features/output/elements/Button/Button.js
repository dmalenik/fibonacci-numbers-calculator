import data from './button.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import handleOutput from './handleOutput'
import text from './button.text.json'

const button = createCustomizedElement(data)

button.innerText = text
button.addEventListener('click', handleOutput)

export default button
