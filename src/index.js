import fibonacciNumbersForm from './components/fibonacciNumberOutput.js'
import fibonacciNumberOutput from './components/fibonacciNumbersForm.js'
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './assets/styles/utilities.css'
import './assets/styles/container.css'
import './assets/styles/form.css'

document.body.appendChild(fibonacciNumbersForm())
document.body.appendChild(fibonacciNumberOutput())
document.body.classList.add('f-col', 'f-x-center', 'f-y-center')
