import animateElement from '../../../services/animateElement'
import providerAnimations from '../components/provider.json'
import changeClass from '../../../utils/changeClass'
import displayFibonacciNumber from '../../output/services/displayFibonacciNumber'
import calcFibonacciNum from './calcFibonacciNum'
import outputAnimations from '../../output/animations/output.json'

const provideFibonacciNum = () => {
    const providerCenterToLeftAnimation = animateElement(
        document.querySelector('#fibonacci-form'),
        providerAnimations.centerToLeft.animations,
        providerAnimations.centerToLeft.time
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
            outputAnimations.leftToCenter.animations,
            outputAnimations.leftToCenter.time
        )
    })
}

export default provideFibonacciNum