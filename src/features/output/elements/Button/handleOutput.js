import animateElement from '../../../shared/utils/animateElement'
import outputAnimations from '../../Output.animations.json'
import changeClass from '../../../shared/utils/changeClass'
import providerAnimations from '../../../input/Provider.animations.json'

const handleOutput = () => {
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

export default handleOutput
