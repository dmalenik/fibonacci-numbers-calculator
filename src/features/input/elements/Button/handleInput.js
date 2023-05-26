import animateElement from '../../../shared/utils/animateElement'
import providerAnimations from '../../components/Provider.animations.json'
import changeClass from '../../../shared/utils/changeClass'
import displayFibonacciNumber from './displayFibonacciNumber'
import calcFibonacciNum from './calcFibonacciNum'
import outputAnimations from '../../../output/components/Output.animations.json'

const handleInput = () => {
    animateElement(
        document.querySelector('#fibonacci-form'),
        providerAnimations.centerToLeft.animations,
        providerAnimations.centerToLeft.time
    ).finished.then(() => {
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

export default handleInput
