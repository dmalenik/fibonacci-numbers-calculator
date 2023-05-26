import animateElement from '../../shared/services/animateElement'
import outputAnimations from './output.json'
import providerAnimations from '../../input/components/Provider.animations.json'
import changeClass from '../../../utils/changeClass'

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
            outputAnimations.centerToLeft.animations,
            outputAnimations.centerToLeft.time
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
                providerAnimations.leftToCenter.animations,
                providerAnimations.leftToCenter.time
            )
        })
    })

    section.appendChild(heading)
    section.appendChild(tryAgainBtn)

    return section
}

export default fibonacciNumberOutput
