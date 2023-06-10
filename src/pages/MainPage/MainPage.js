import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './container.data.json'

const MainPage = () => {
    const container = createCustomizedElement(data)

    import('./components').then(({ Header, Main, Footer }) => {
        container.appendChild(Header())
        container.appendChild(Main())
        container.appendChild(Footer())
    })

    return container
}

export default MainPage
