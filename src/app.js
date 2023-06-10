import createCustomizedElement from './utils/DOMElementUtils'
import data from './root.data.json'
import './App.styles.scss'

const App = () => {
    const root = createCustomizedElement(data)
    root.classList.add('app')

    import('./pages').then(({ MainPage }) => {
        console.log(MainPage())
        root.appendChild(MainPage())
    })

    return root
}

export default App
