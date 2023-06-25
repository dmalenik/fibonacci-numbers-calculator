import data from './copyright.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import Text from './text.json'

const copyright = createCustomizedElement(data)

copyright.innerText = `${String.fromCharCode(64)} ${Text}`

export default copyright
