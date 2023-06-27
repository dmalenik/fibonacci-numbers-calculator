import data from './label.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import text from './label.text.json'

const label = createCustomizedElement(data)

label.innerText = text

export default label
