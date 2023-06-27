import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Output.data.json'
import calcFibonacciNum from '../services/fibonacciNumService'
import updateItemToSessionStorage from '../utils/sessionStorageUtils'
import './Output.styles.scss'

const Output = () => {
    const sequenceNumber = sessionStorage.getItem('sequenceNumber')
    const fibonacciNum = calcFibonacciNum(sequenceNumber)

    updateItemToSessionStorage('fibonacciNum', fibonacciNum)

    const section = createCustomizedElement(data)

    import('./elements').then(({ result, button }) => {
        result.innerText = `The Fibonacci number is ${sessionStorage.getItem(
            'fibonacciNum'
        )}`

        section.appendChild(result)
        section.appendChild(button)
    })

    return section
}

export default Output
