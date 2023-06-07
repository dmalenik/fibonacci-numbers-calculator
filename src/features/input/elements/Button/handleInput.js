import animateElement from '../../../utils/animateElement'
import providerAnimations from '../../Provider.animations.json'
import displayFibonacciNumber from './displayFibonacciNumber'
import calcFibonacciNum from './calcFibonacciNum'
import outputAnimations from '../../../output/Output.animations.json'
import changeClass from '../../../utils/changeClass'

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
        displayFibonacciNumber(
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
