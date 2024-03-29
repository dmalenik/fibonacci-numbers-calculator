import { createCustomizedElement } from './utils/DOMUtils'
import data from './App.data.json'
import './App.styles.scss'

const App = () => {
    const root = createCustomizedElement(data)

    import('./components').then(({ Header, Main, Footer }) => {
        root.appendChild(Header())
        root.appendChild(Main())
        root.appendChild(Footer())
    })

    return root
}

export default App
