import changeClass from '../../../utils/classUtils'

const handleOutputCopy = () => {
    // remove Output
    // import Provider
    changeClass(document.querySelector('#output'), 'd-flex', 'd-none')
    changeClass(document.querySelector('#fibonacci-form'), 'd-none', 'd-flex')
}

export default handleOutputCopy
