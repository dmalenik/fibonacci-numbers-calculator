import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Header.data.json'
import './Header.styles.scss'

const Header = () => {
    const container = createCustomizedElement(data)

    import('./elements').then(({ h1 }) => {
        container.appendChild(h1)
    })

    return container
}

export default Header
