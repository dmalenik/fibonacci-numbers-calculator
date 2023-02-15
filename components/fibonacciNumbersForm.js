import calcFibonacciNum from '../logic/calcFibonacciNum.js'
import changeClass from '../logic/changeClass.js'
import replaceElements from '../logic/replaceElements.js'
import animateElement from '../logic/animateElement.js'
import {
    formCenterToLeft,
    formCenterToLeftTiming,
} from '../assets/animations/formCenterToLeft.js'
import {
    outputLeftToCenter,
    outputLeftToCenterTiming,
} from '../assets/animations/outputLeftToCenter.js'
import displayFibonacciNumber from '../logic/displayFibonacciNumber.js'

const fibonacciNumbersForm = () => {
    const form = document.createElement('form')

    form.setAttribute('id', 'fibonacci-form')
    form.setAttribute('method', '')
    form.setAttribute('action', '')

    form.classList.add('f-row', 'f-col-gap')

    const label = document.createElement('label')

    label.setAttribute('for', 'fibonacci-numbers')

    label.innerText =
        'Type a sequence number to see a Fibonacci number within a specific order:'

    const input = document.createElement('input')

    input.setAttribute('id', 'fibonacci-numbers')
    input.setAttribute('type', 'number')
    input.setAttribute('name', 'fibonacci-numbers')
    input.setAttribute('min', 0)

    input.addEventListener('change', (event) =>
        event.target.setAttribute('value', event.target.value)
    )

    const send = document.createElement('button')

    send.setAttribute('id', 'fibonacci-button')
    send.setAttribute('type', 'button')
    send.setAttribute('form', 'fibonacci-form')

    send.innerText = 'Send'

    send.addEventListener('click', (event) => {
        let formCenterToLeftAnimation = animateElement(
            form,
            formCenterToLeft,
            formCenterToLeftTiming
        )

        formCenterToLeftAnimation.finished.then(() => {
            replaceElements(
                changeClass(form, 'f-row', 'd-hidden'),
                changeClass(
                    document.querySelector('#output'),
                    'd-hidden',
                    'f-col'
                )
            )
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

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(send)

    return form
}

export default fibonacciNumbersForm
