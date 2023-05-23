import calcFibonacciNum from '../services/calcFibonacciNum'
import changeClass from '../../../utils/changeClass'
import animateElement from '../../../services/animateElement'
import {
    formCenterToLeft,
    formCenterToLeftTiming,
} from '../animations/formCenterToLeft'
import {
    outputLeftToCenter,
    outputLeftToCenterTiming,
} from '../../output/animations/outputLeftToCenter'
import displayFibonacciNumber from '../../output/services/displayFibonacciNumber'
import './form.css'

const Input = () => {
    const section = document.createElement('form')

    section.setAttribute('id', 'fibonacci-form')
    section.setAttribute('method', '')
    section.setAttribute('action', '')
    section.classList.add('f-row', 'f-col-gap')

    const label = document.createElement('label')

    label.setAttribute('for', 'fibonacci-number')
    label.innerText =
        'Type a sequence number to take a Fibonacci number from a specific order:'

    const input = document.createElement('input')

    input.setAttribute('id', 'input-number')
    input.setAttribute('type', 'number')
    input.setAttribute('name', 'input-number')
    input.setAttribute('min', 0)

    input.addEventListener('change', (event) =>
        event.target.setAttribute('value', event.target.value)
    )

    const send = document.createElement('button')

    send.setAttribute('id', 'fibonacci-button')
    send.setAttribute('type', 'button')
    send.setAttribute('form', 'fibonacci-form')

    send.innerText = 'Send'

    send.addEventListener('click', () => {
        const formCenterToLeftAnimation = animateElement(
            section,
            formCenterToLeft,
            formCenterToLeftTiming
        )

        formCenterToLeftAnimation.finished.then(() => {
            changeClass(section, 'f-row', 'd-hidden')
            changeClass(document.querySelector('#output'), 'd-hidden', 'f-col')
            displayFibonacciNumber(
                Number(input.getAttribute('value')),
                calcFibonacciNum,
                document.querySelector('#output h2')
            )
            animateElement(
                document.querySelector('#output'),
                outputLeftToCenter,
                outputLeftToCenterTiming
            )
        })
    })

    section.appendChild(label)
    section.appendChild(input)
    section.appendChild(send)

    return section
}

export default Input
