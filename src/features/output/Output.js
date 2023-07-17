import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Output.data.json'
import calcFibonacciNum from '../services/fibonacciNumService'
import { getItem } from '../api/sessionStorage'
import './Output.styles.scss'

const Output = () => {
    const sequenceNumber = getItem('sequenceNumber')
    const fibonacciNum = calcFibonacciNum(sequenceNumber)
    const outputText = `The Fibonacci number is ${fibonacciNum}`

    const section = createCustomizedElement(data)

    import('./elements').then(({ result, button }) => {
        result.innerText = outputText

        section.appendChild(result)
        section.appendChild(button)
    })

    return section
}

export default Output
