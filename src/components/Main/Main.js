import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './container.data.json'

const Main = () => {
    const container = createCustomizedElement(data)
    container.classList.add('main')

    import('../../features').then(({ Output, Provider }) => {
        container.appendChild(Provider())
        container.appendChild(Output())
    })

    return container
}

export default Main
