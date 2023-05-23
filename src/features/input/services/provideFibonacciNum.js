import animateElement from '../../../services/animateElement'
import provider from '../animations/provider.json'
import changeClass from '../../../utils/changeClass'
import displayFibonacciNumber from '../../output/services/displayFibonacciNumber'
import calcFibonacciNum from './calcFibonacciNum'
import output from '../../output/animations/output.json'

const provideFibonacciNum = () => {
    const providerCenterToLeftAnimation = animateElement(
        document.querySelector('#fibonacci-form'),
        provider.centerToLeft.animations,
        provider.centerToLeft.time
    )

    providerCenterToLeftAnimation.finished.then(() => {
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
            output.leftToCenter.animations,
            output.leftToCenter.time
        )
    })
}

export default provideFibonacciNum
