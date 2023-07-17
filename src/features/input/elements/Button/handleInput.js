import Output from '../../../output/Output'
import { settleItem } from '../../../api/sessionStorage'

const handleInput = () => {
    const source = document.querySelector('#input-number')

    settleItem('sequenceNumber', source.getAttribute('value'))

    const parent = document.querySelector('main')

    parent.replaceChildren(Output())
}

export default handleInput
