import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './container.data.json'

const Main = () => {
    const container = createCustomizedElement(data)
    container.classList.add('main')


    return container
}

export default Main
