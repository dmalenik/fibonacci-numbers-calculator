import fibonacciNumbersForm from './features/input/components/fibonacciNumbersForm'
import fibonacciNumberOutput from './features/output/components/fibonacciNumberOutput'
import './assets/styles/normalize.css'
import './app.css'
import './assets/styles/utilities.css'
import './features/input/components/form.css'

document.body.classList.add('f-col', 'f-x-center', 'f-y-center')

let form = fibonacciNumbersForm()
document.body.appendChild(form)

if (module.hot) {
    module.hot.accept('./features/input/components/fibonacciNumbersForm.js', () => {
        console.log('Accepting the updated fibonacciNumbersForm')
        document.body.removeChild(form)
        form = fibonacciNumbersForm()
        document.body.appendChild(form)
    })
}

let output = fibonacciNumberOutput()
document.body.appendChild(output)

if (module.hot) {
    module.hot.accept('./features/input/components/fibonacciNumbersForm.js', () => {
        console.log('Accepting the updated fibonacciNumberOutput')
        document.body.removeChild(output)
        output = fibonacciNumberOutput()
        document.body.appendChild(output)
    })
}
