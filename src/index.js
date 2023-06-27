import App from './App'
import './normalize.scss'
import './index.scss'

// Accessibility issues
document.querySelector('html').setAttribute('lang', 'en-US')

// SEO issues
const summary = document.createElement('meta')

summary.setAttribute('name', 'description')
summary.setAttribute(
    'content',
    'Application: Fibonacci Numbers Calculator, Author: Dmitriy Malenik, Year: 2023, Purpose: By providing the sequence number in the input field you may find a Fibonacci number'
)

document.querySelector('head').appendChild(summary)

// Application installation
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
