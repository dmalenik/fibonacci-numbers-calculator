import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './section.data.json'

const Output = () => {
    const section = createCustomizedElement(data)

    Promise.all([
        import('../services/fibonacciNumService'),
        import('../services/sessionStorageService'),
    ])
        .then((modules) => {
            const calcFibonacciNum = modules[0].default
            const updateItemToSessionStorage = modules[1].default

            const sequenceNumber = sessionStorage.getItem('sequenceNumber')
            const fibonacciNum = calcFibonacciNum(sequenceNumber)

            updateItemToSessionStorage('fibonacciNum', fibonacciNum)
        })
        .then(() => {
            import('./elements').then(({ h2, result, button }) => {
                result.innerText = `The Fibonacci number is ${sessionStorage.getItem(
                    'fibonacciNum'
                )}`

                section.appendChild(h2)
                section.appendChild(result)
                section.appendChild(button)
            })
        })

    return section
}

export default Output
