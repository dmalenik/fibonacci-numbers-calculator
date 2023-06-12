import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './container.data.json'

const Main = () => {
    const container = createCustomizedElement(data)
    container.classList.add('main')

    import('../../features').then(({ Provider }) =>
        container.appendChild(Provider())
    )

    return container
}

export default Main
