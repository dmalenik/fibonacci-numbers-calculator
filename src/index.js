import fibonacciNumbersForm from './components/fibonacciNumberOutput.js'
import fibonacciNumberOutput from './components/fibonacciNumbersForm.js'
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './assets/styles/utilities.css'
import './assets/styles/container.css'
import './assets/styles/form.css'

document.body.classList.add('f-col', 'f-x-center', 'f-y-center')

let form = fibonacciNumbersForm()
document.body.appendChild(form)

if (module.hot) {
    module.hot.accept('./components/fibonacciNumbersForm.js', function () {
        console.log('Accepting the updated fibonacciNumbersForm')
        document.body.removeChild(form)
        form = fibonacciNumbersForm()
        document.body.appendChild(form)
    })
}

let output = fibonacciNumberOutput()
document.body.appendChild(output)

if (module.hot) {
    module.hot.accept('./components/fibonacciNumberOutput.js', function () {
        console.log('Accepting the updated fibonacciNumberOutput')
        document.body.removeChild(output)
        output = fibonacciNumberOutput()
        document.body.appendChild(output)
    })
}
