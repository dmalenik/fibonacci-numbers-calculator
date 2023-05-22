import Home from './pages/Home/Home'
import './app.css'

const App = () => {
    const container = document.createElement('div')

    container.classList.add('app')

    let home = Home()
    container.appendChild(home)

    if (module.hot) {
        module.hot.accept('./pages/Home/Home.js', () => {
            console.log('Accepting the updated Home page')
            container.removeChild(home)
            home = Home()
            container.appendChild(home)
        })
    }

    return container
}

export default App
