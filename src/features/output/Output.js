import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './section.data.json'
import './Output.styles.scss'

const Output = () => {
    const section = createCustomizedElement(data)

    Promise.all([
        import('../services/fibonacciNumService'),
        import('../utils/sessionStorageUtils'),
        import('./elements'),
    ]).then((modules) => {
        const calcFibonacciNum = modules[0].default
        const updateItemToSessionStorage = modules[1].default
        const { result, button } = modules[2]

        const sequenceNumber = sessionStorage.getItem('sequenceNumber')
        const fibonacciNum = calcFibonacciNum(sequenceNumber)

        updateItemToSessionStorage('fibonacciNum', fibonacciNum)

        result.innerText = `The Fibonacci number is ${sessionStorage.getItem(
            'fibonacciNum'
        )}`

        section.appendChild(result)
        section.appendChild(button)
    })

    return section
}

export default Output
