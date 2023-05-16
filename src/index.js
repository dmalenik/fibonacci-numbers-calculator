import fibonacciNumbersForm from './components/fibonacciNumberOutput.js'
import fibonacciNumberOutput from './components/fibonacciNumbersForm.js'
import createCSSLink from './logic/createCSSLink.js'
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './assets/styles/utilities.css'
import './assets/styles/container.css'
import './assets/styles/form.css'

// | PAGE SECTIONS

document.querySelector('.container').appendChild(fibonacciNumbersForm())
document.querySelector('.container').appendChild(fibonacciNumberOutput())

// | STYLES

const styles = [
    './assets/styles/normalize.css',
    './assets/styles/global.css',
    './assets/styles/utilities.css',
    './assets/styles/container.css',
    './assets/styles/form.css',
]

styles.forEach((style) => createCSSLink(style))

document
    .querySelector('.container')
    .classList.add('f-col', 'f-x-center', 'f-y-center')
