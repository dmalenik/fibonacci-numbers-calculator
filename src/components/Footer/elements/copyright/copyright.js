import data from './copyright.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import text from './copyright.text.json'

const copyright = createCustomizedElement(data)

copyright.innerText = `${String.fromCharCode(64)} ${text}`

export default copyright
