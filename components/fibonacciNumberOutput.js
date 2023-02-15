import animateElement from '../logic/animateElement.js'
import {
    outputCenterToLeft,
    outputCenterToLeftTiming,
} from '../assets/animations/outputCenterToLeft.js'
import {
    formLeftToCenter,
    formLeftToCenterTiming,
} from '../assets/animations/formLeftToCenter.js'
import changeClass from '../logic/changeClass.js'

const fibonacciNumberOutput = () => {
    const output = document.createElement('section')

    output.setAttribute('id', 'output')

    output.classList.add('d-hidden', 'f-y-center', 'f-x-center')

    const heading = document.createElement('h2')

    heading.innerText = 'Display the result of a Fibonacci number calculations'

    const tryAgainBtn = document.createElement('button')

    tryAgainBtn.setAttribute('id', 'again')
    tryAgainBtn.setAttribute('type', 'button')

    tryAgainBtn.innerText = 'Try again'

    tryAgainBtn.addEventListener('click', (event) => {
        let outputCenterToLeftAnimation = animateElement(
            output,
            outputCenterToLeft,
            outputCenterToLeftTiming
        )

        outputCenterToLeftAnimation.finished.then(() => {
            changeClass(output, 'f-col', 'd-hidden')
            changeClass(
                document.querySelector('#fibonacci-form'),
                'd-hidden',
                'f-row'
            )

            animateElement(
                document.querySelector('#fibonacci-form'),
                formLeftToCenter,
                formLeftToCenterTiming
            )
        })
    })

    output.appendChild(heading)
    output.appendChild(tryAgainBtn)

    return output
}

export default fibonacciNumberOutput
