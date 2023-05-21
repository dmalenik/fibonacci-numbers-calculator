import animateElement from '../../../services/animateElement'
import {
    outputCenterToLeft,
    outputCenterToLeftTiming,
} from '../animations/outputCenterToLeft'
import {
    formLeftToCenter,
    formLeftToCenterTiming,
} from '../../input/animations/formLeftToCenter'
import changeClass from '../../../services/changeClass'

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

    tryAgainBtn.addEventListener('click', () => {
        const outputCenterToLeftAnimation = animateElement(
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
