import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Main.data.json'
import { Provider } from '../../features'
import './Main.styles.scss'

const Main = () => {
    const container = createCustomizedElement(data)

    container.appendChild(Provider())

    return container
}

export default Main
