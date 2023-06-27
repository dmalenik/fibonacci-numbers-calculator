import { createCustomizedElement } from '../../../../utils/DOMUtils'
import data from './h1.data.json'
import text from './h1.text.json'

const h1 = createCustomizedElement(data)

h1.innerText = text

export default h1
