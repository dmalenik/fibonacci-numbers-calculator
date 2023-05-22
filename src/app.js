import Header from './components/layout/Header/Header'
import Main from './components/layout/Main/Main'
import Footer from './components/layout/Footer/Footer'
import './app.css'

const App = () => {
    const container = document.createElement('div')

    container.classList.add('container')

    let header = Header()
    container.appendChild(header)

    if (module.hot) {
        module.hot.accept('./components/layout/Header/Header.js', () => {
            console.log('Accepting the updated Header component')
            container.removeChild(header)
            header = Header()
            container.appendChild(header)
        })
    }

    let main = Main()
    container.appendChild(main)

    if (module.hot) {
        module.hot.accept('./components/layout/Main/Main.js', () => {
            console.log('Accepting the updated Main container')
            container.removeChild(main)
            main = Main()
            container.appendChild(main)
        })
    }

    let footer = Footer()
    container.appendChild(footer)

    if (module.hot) {
        module.hot.accept('./components/layout/Footer/Footer.js', () => {
            console.log('Accepting the updated Footer container')
            container.removeChild(footer)
            footer = Footer()
            container.appendChild(footer)
        })
    }

    return container
}

export default App
