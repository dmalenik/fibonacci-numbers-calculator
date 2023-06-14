import data from './copyright.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'

const copyright = createCustomizedElement(data)

copyright.innerText = `${String.fromCharCode(64)} 2023 by Dmitriy Malenik`

export default copyright
