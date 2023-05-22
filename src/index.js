import App from './App'
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './assets/styles/utilities.css'

document.body.classList.add('f-col', 'f-x-center', 'f-y-center')

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
