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
    const section = document.createElement('section')

    section.setAttribute('id', 'output')
    section.classList.add('d-hidden', 'f-y-center', 'f-x-center')

    const heading = document.createElement('h2')

    heading.innerText = 'Display the result of a Fibonacci number calculations'

    const tryAgainBtn = document.createElement('button')

    tryAgainBtn.setAttribute('id', 'again')
    tryAgainBtn.setAttribute('type', 'button')
    tryAgainBtn.innerText = 'Try again'

    tryAgainBtn.addEventListener('click', () => {
        const outputCenterToLeftAnimation = animateElement(
            section,
            outputCenterToLeft,
            outputCenterToLeftTiming
        )

        outputCenterToLeftAnimation.finished.then(() => {
            changeClass(section, 'f-col', 'd-hidden')
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

    section.appendChild(heading)
    section.appendChild(tryAgainBtn)

    return section
}

export default fibonacciNumberOutput
