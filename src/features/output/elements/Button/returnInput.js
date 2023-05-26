import animateElement from '../../../shared/utils/animateElement'
import outputAnimations from '../../components/Output.animations.json'
import changeClass from '../../../../utils/changeClass'
import providerAnimations from '../../../input/components/Provider.animations.json'

const returnInput = () => {
    animateElement(
        document.querySelector('#output'),
        outputAnimations.centerToLeft.animations,
        outputAnimations.centerToLeft.time
    ).finished.then(() => {
        changeClass(document.querySelector('#output'), 'f-col', 'd-hidden')
        changeClass(
            document.querySelector('#fibonacci-form'),
            'd-hidden',
            'f-row'
        )
        animateElement(
            document.querySelector('#fibonacci-form'),
            providerAnimations.leftToCenter.animations,
            providerAnimations.leftToCenter.time
        )
    })
}

export default returnInput
