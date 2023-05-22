import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const Home = () => {
    const container = document.createElement('div')

    container.classList.add('home')

    let header = Header()
    container.appendChild(header)

    if (module.hot) {
        module.hot.accept('./components/Header.js', () => {
            console.log('Accepting the updated Header component')
            container.removeChild(header)
            header = Header()
            container.appendChild(header)
        })
    }

    let main = Main()
    container.appendChild(main)

    if (module.hot) {
        module.hot.accept('./components/Main.js', () => {
            console.log('Accepting the updated Main container')
            container.removeChild(main)
            main = Main()
            container.appendChild(main)
        })
    }

    let footer = Footer()
    container.appendChild(footer)

    if (module.hot) {
        module.hot.accept('./components/Footer.js', () => {
            console.log('Accepting the updated Footer container')
            container.removeChild(footer)
            footer = Footer()
            container.appendChild(footer)
        })
    }

    return container
}

export default Home