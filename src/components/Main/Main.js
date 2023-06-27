import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Main.data.json'
import './Main.styles.scss'

const Main = () => {
    const container = createCustomizedElement(data)

    import('../../features').then(({ Provider }) => {
        container.appendChild(Provider())
    })

    return container
}

export default Main
