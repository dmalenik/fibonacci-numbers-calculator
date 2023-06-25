import data from './button.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import handleInput from './handleInput'
import Text from './text.json'

const button = createCustomizedElement(data)

button.innerText = Text
button.addEventListener('click', handleInput)

export default button
