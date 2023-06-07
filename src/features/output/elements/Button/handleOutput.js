import animateElement from '../../../utils/animateElement'
import outputAnimations from '../../Output.animations.json'
import changeClass from '../../../utils/changeClass'
import providerAnimations from '../../../input/Provider.animations.json'

const handleOutput = () => {
    animateElement(
        document.querySelector('#output'),
        outputAnimations.centerToLeft.animations,
        outputAnimations.centerToLeft.time
    ).finished.then(() => {
        changeClass(document.querySelector('#output'), 'd-flex', 'd-none')
        changeClass(document.querySelector('#fibonacci-form'), 'd-none', 'd-flex')
        animateElement(
            document.querySelector('#fibonacci-form'),
            providerAnimations.leftToCenter.animations,
            providerAnimations.leftToCenter.time
        )
    })
}

export default handleOutput
