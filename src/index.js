import App from './App'
import './normalize.scss'
import './index.scss'

// Accessibility issues
document.querySelector('html').setAttribute('lang', 'en-US')
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
