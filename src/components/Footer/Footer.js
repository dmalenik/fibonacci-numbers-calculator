import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './container.data.json'
import h2 from './elements/h2/h2'

const Footer = () => {
    const container = createCustomizedElement(data)
    container.classList.add('footer')

    container.appendChild(h2)

    return container
}

export default Footer
