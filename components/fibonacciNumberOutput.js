import {
    centerToLeft,
    centerToLeftTiming,
} from '../assets/animations/centerToLeft.js'
import {
    rightToCenter,
    rightToCenterTiming,
} from '../assets/animations/rightToCenter.js'

const fibonacciNumberOutput = () => {
    const output = document.createElement('section')

    output.setAttribute('id', 'output')

    output.classList.add('d-hidden', 'f-y-center', 'f-x-center')

    const heading = document.createElement('h3')

    heading.innerText = 'Display the result of a Fibonacci number calculations'

    const tryAgainBtn = document.createElement('button')

    tryAgainBtn.setAttribute('id', 'again')
    tryAgainBtn.setAttribute('type', 'button')

    tryAgainBtn.innerText = 'Try again'

    tryAgainBtn.addEventListener('click', (event) => {
        let outputCenterToLeft = output.animate(
            centerToLeft,
            centerToLeftTiming
        )

        outputCenterToLeft.finished.then(() => {
            output.classList.replace('f-col', 'd-hidden')
            document
                .querySelector('#fibonacci-form')
                .classList.replace('d-hidden', 'f-row')

            document
                .querySelector('#fibonacci-form')
                .animate(rightToCenter, rightToCenterTiming)
        })
    })

    output.appendChild(heading)
    output.appendChild(tryAgainBtn)

    return output
}

export default fibonacciNumberOutput
