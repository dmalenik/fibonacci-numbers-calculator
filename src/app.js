import Container from './elements/container/container'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
    let header = Header()
    Container.appendChild(header)

    if (module.hot) {
        module.hot.accept('./components/Header/Header.js', () => {
            console.log('Accepting the updated Header section')
            Container.removeChild(header)
            header = Header()
            Container.appendChild(header)
        })
    }

    let main = Main()
    Container.appendChild(main)

    if (module.hot) {
        module.hot.accept('./components/Main/Main.js', () => {
            console.log('Accepting the updated Main section')
            Container.removeChild(main)
            main = Main()
            Container.appendChild(main)
        })
    }

    let footer = Footer()
    Container.appendChild(footer)

    if (module.hot) {
        module.hot.accept('./components/Footer/Footer.js', () => {
            console.log('Accepting the updated Footer section')
            Container.removeChild(footer)
            footer = Footer()
            Container.appendChild(footer)
        })
    }

    return Container
}

export default App
