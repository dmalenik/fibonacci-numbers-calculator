import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './container.data.json'
import copyright from './elements/copyright/copyright'

const Footer = () => {
    const container = createCustomizedElement(data)
    container.classList.add('footer')

    container.appendChild(copyright)

    return container
}

export default Footer
