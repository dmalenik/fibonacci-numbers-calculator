const displayFibonacciNumber = (sequenceNumber, handler, elem) => {
    const fibonacciNumber = handler(sequenceNumber)

    elem.innerText = `The Fibonacci number at the sequence number ${sequenceNumber} is: ${fibonacciNumber}`

    return elem
}

export default displayFibonacciNumber
