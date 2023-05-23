import animateElement from '../../../services/animateElement'
import {
    formCenterToLeft,
    formCenterToLeftTiming,
} from '../animations/formCenterToLeft'
import changeClass from '../../../utils/changeClass'
import displayFibonacciNumber from '../../output/services/displayFibonacciNumber'
import calcFibonacciNum from './calcFibonacciNum'
import {
    outputLeftToCenter,
    outputLeftToCenterTiming,
} from '../../output/animations/outputLeftToCenter'

const provideFibonacciNum = () => {
    const formCenterToLeftAnimation = animateElement(
        document.querySelector('#fibonacci-form'),
        formCenterToLeft,
        formCenterToLeftTiming
    )

    formCenterToLeftAnimation.finished.then(() => {
        changeClass(
            document.querySelector('#fibonacci-form'),
            'f-row',
            'd-hidden'
        )
        changeClass(document.querySelector('#output'), 'd-hidden', 'f-col')
        displayFibonacciNumber(
            Number(
                document.querySelector('#input-number').getAttribute('value')
            ),
            calcFibonacciNum,
            document.querySelector('#output h2')
        )
        animateElement(
            document.querySelector('#output'),
            outputLeftToCenter,
            outputLeftToCenterTiming
        )
    })
}

export default provideFibonacciNum
