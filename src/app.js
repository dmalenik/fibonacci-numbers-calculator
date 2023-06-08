import root from './root/root'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.styles.scss'

const App = () => {
    root.classList.add('app')

    let header = Header()
    root.appendChild(header)

    if (module.hot) {
        module.hot.accept('./components/Header/Header.js', () => {
            console.log('Accepting the updated Header section')
            root.removeChild(header)
            header = Header()
            root.appendChild(header)
        })
    }

    let main = Main()
    root.appendChild(main)

    if (module.hot) {
        module.hot.accept('./components/Main/Main.js', () => {
            console.log('Accepting the updated Main section')
            root.removeChild(main)
            main = Main()
            root.appendChild(main)
        })
    }

    let footer = Footer()
    root.appendChild(footer)

    if (module.hot) {
        module.hot.accept('./components/Footer/Footer.js', () => {
            console.log('Accepting the updated Footer section')
            root.removeChild(footer)
            footer = Footer()
            root.appendChild(footer)
        })
    }

    return root
}

export default App
