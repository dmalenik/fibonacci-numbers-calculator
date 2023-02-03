import calcFibonacciNum from '../logic/calcFibonacciNum.js'
import {
    leftToCenter,
    leftToCenterTiming,
} from '../assets/animations/leftToCenter.js'

const fibonacciNumberOutput = () => {
    const output = document.createElement('section')

    output.setAttribute('id', 'output')

    output.classList.add('w-100', 'd-hidden', 'f-y-center', 'f-x-center')

    const heading = document.createElement('h3')

    let sequenceNumber = sessionStorage.getItem('sequenceNumber')
    let fibonacciNumber = calcFibonacciNum(Number(sequenceNumber))

    heading.innerText = `The Fibonacci number at the sequence number ${sequenceNumber} is: ${fibonacciNumber}`

    const tryAgainBtn = document.createElement('button')

    tryAgainBtn.setAttribute('id', 'again')
    tryAgainBtn.setAttribute('type', 'button')

    tryAgainBtn.innerText = 'Try again'

    tryAgainBtn.addEventListener('click', (event) => {
        output.classList.replace('f-col', 'd-hidden')
        document
            .querySelector('#fibonacci-form')
            .classList.replace('d-hidden', 'f-row')
    })

    output.appendChild(heading)
    output.appendChild(numbers)
    output.appendChild(tryAgainBtn)

    return output
}

export default fibonacciNumberOutput
