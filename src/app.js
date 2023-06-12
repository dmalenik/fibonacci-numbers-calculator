import { createCustomizedElement } from './utils/DOMUtils'
import data from './root.data.json'
import './App.styles.scss'

const App = () => {
    const root = createCustomizedElement(data)
    root.classList.add('app')

    import('./components').then(({ Header, Main, Footer }) => {
        root.appendChild(Header())
        root.appendChild(Main())
        root.appendChild(Footer())
    })

    return root
}

export default App
