import Form from '../elements/Form'
import Label from '../elements/Label'
import Input from '../elements/Input'
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
import './input.css'

const Provider = () => {
    const section = Form()
    const label = Label()
    const input = Input()

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

export default Provider
