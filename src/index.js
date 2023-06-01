import App from './App'
import './assets/styles/normalize.scss'
import './assets/styles/global.scss'

let app = App()
document.body.appendChild(app)

if (module.hot) {
    module.hot.accept('./App.js', () => {
        console.log('Accepting the updated App component')
        document.body.removeChild(app)
        app = App()
        document.body.appendChild(app)
    })
}
