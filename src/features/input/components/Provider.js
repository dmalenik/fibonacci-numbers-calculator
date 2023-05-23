import Form from '../elements/Form'
import Label from '../elements/Label'
import Input from '../elements/Input'
import Button from '../elements/Button'
import setInputValue from '../services/setInputValue'
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

    section.appendChild(label)

    const input = Input()

    input.addEventListener('change', setInputValue)

    section.appendChild(input)

    const send = Button()

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

    section.appendChild(send)

    return section
}

export default Provider
