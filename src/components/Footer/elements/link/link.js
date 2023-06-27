import data from './link.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'
import icon from './github.svg'

const link = createCustomizedElement(data)

const githubIcon = new Image()

githubIcon.setAttribute('src', icon)
githubIcon.setAttribute('alt', 'GitHub Icon')

link.appendChild(githubIcon)

export default link
