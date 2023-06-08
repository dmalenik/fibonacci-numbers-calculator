import animateElement from '../../../services/animationService'
import providerAnimations from '../../../animations/Provider.animations.json'
import {
    calcFibonacciNum,
    displayFibonacciNum,
} from '../../../services/fibonacciNumService'
import outputAnimations from '../../../animations/Output.animations.json'
import changeClass from '../../../utils/classUtils'

const handleInput = () => {
    animateElement(
        document.querySelector('#fibonacci-form'),
        providerAnimations.centerToLeft.animations,
        providerAnimations.centerToLeft.time
    ).finished.then(() => {
        changeClass(
            document.querySelector('#fibonacci-form'),
            'd-flex',
            'd-none'
        )
        changeClass(document.querySelector('#output'), 'd-none', 'd-flex')
        displayFibonacciNum(
            Number(
                document.querySelector('#input-number').getAttribute('value')
            ),
            calcFibonacciNum,
            document.querySelector('#output h2')
        )
        animateElement(
            document.querySelector('#output'),
            outputAnimations.leftToCenter.animations,
            outputAnimations.leftToCenter.time
        )
    })
}

export default handleInput
