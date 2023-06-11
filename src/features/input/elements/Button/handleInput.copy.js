import {
    calcFibonacciNum,
    displayFibonacciNum,
} from '../../../services/fibonacciNumService'
import changeClass from '../../../utils/classUtils'

const handleInputCopy = () => {
    // put sequence number in sessionStorage
    // remove Provider
    // import Output
    // display Fibonacci number
    changeClass(document.querySelector('#fibonacci-form'), 'd-flex', 'd-none')
    changeClass(document.querySelector('#output'), 'd-none', 'd-flex')
    displayFibonacciNum(
        Number(document.querySelector('#input-number').getAttribute('value')),
        calcFibonacciNum,
        document.querySelector('#output h2')
    )
}

export default handleInputCopy
