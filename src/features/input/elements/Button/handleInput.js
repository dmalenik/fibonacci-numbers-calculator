import Output from '../../../output/Output'

const handleInput = () => {
    const source = document.querySelector('#input-number')

    sessionStorage.setItem('sequenceNumber', source.getAttribute('value'))

    const parent = document.querySelector('main')

    parent.replaceChildren(Output())
}

export default handleInput
