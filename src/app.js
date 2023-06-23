import { createCustomizedElement } from './utils/DOMUtils'
import data from './root.data.json'
import { Header, Main, Footer } from './components'
import './App.styles.scss'

const App = () => {
    const root = createCustomizedElement(data)

    root.appendChild(Header())
    root.appendChild(Main())
    root.appendChild(Footer())

    return root
}

export default App
