import fibonacciNumbersForm from '../components/fibonacciNumbersForm.js'
import fibonacciNumberOutput from '../components/fibonacciNumberOutput.js'
import createCSSLink from '../logic/createCSSLink.js'

// | PAGE SECTIONS

document.querySelector('.container').appendChild(fibonacciNumbersForm())
document.querySelector('.container').appendChild(fibonacciNumberOutput())

// | STYLES

createCSSLink('../assets/styles/normalize.css')
createCSSLink('../assets/styles/global.css')
createCSSLink('../assets/styles/utilities.css')
createCSSLink('../assets/styles/container.css')
createCSSLink('../assets/styles/form.css')

document
    .querySelector('.container')
    .classList.add('f-col', 'f-x-center', 'f-y-center')
