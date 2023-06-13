import data from './copyright.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import link from '../link/link'

const copyright = createCustomizedElement(data)

copyright.innerText = `${String.fromCharCode(64)} 2023 `
copyright.appendChild(link)

export default copyright
