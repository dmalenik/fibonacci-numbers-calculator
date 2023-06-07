import container from './elements/container/container'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.styles.scss'

const App = () => {
    container.classList.add('app')

    let header = Header()
    container.appendChild(header)

    if (module.hot) {
        module.hot.accept('./components/Header/Header.js', () => {
            console.log('Accepting the updated Header section')
            container.removeChild(header)
            header = Header()
            container.appendChild(header)
        })
    }

    let main = Main()
    container.appendChild(main)

    if (module.hot) {
        module.hot.accept('./components/Main/Main.js', () => {
            console.log('Accepting the updated Main section')
            container.removeChild(main)
            main = Main()
            container.appendChild(main)
        })
    }

    let footer = Footer()
    container.appendChild(footer)

    if (module.hot) {
        module.hot.accept('./components/Footer/Footer.js', () => {
            console.log('Accepting the updated Footer section')
            container.removeChild(footer)
            footer = Footer()
            container.appendChild(footer)
        })
    }

    return container
}

export default App
