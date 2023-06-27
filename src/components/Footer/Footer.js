import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Footer.data.json'
import './Footer.styles.scss'

const Footer = () => {
    const container = createCustomizedElement(data)

    import('./elements').then(({ link, copyright }) => {
        container.appendChild(link)
        container.appendChild(copyright)
    })

    return container
}

export default Footer
