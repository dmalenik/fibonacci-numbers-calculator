const displayFibonacciNumber = (sequenceNumber, handler, elem) => {
    let fibonacciNumber = handler(sequenceNumber)

    elem.innerText = `The Fibonacci number at the sequence number ${sequenceNumber} is: ${fibonacciNumber}`

    return elem
}

export default displayFibonacciNumber
