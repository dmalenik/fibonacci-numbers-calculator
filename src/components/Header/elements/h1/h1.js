import { createCustomizedElement } from '../../../../utils/DOMUtils'
import data from './h1.data.json'
import Text from './text.json'

const h1 = createCustomizedElement(data)

h1.innerText = Text

export default h1
