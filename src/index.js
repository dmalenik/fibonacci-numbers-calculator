import fibonacciNumbersForm from './components/fibonacciNumberOutput.js'
import fibonacciNumberOutput from './components/fibonacciNumbersForm.js'
import createCSSLink from './logic/createCSSLink.js'
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './assets/styles/utilities.css'
import './assets/styles/container.css'
import './assets/styles/form.css'

document.querySelector('.container').appendChild(fibonacciNumbersForm())
document.querySelector('.container').appendChild(fibonacciNumberOutput())
document
    .querySelector('.container')
    .classList.add('f-col', 'f-x-center', 'f-y-center')
