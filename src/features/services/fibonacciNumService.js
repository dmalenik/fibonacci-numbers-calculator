const calcFibonacciNum = (queueNumber) => {
    // Binet formula
    const sqrt5 = Math.sqrt(5)
    const PHI1 = (1 + sqrt5) / 2
    const PHI2 = (1 - sqrt5) / 2
    const fibonacciNumber = Math.round(
        (PHI1 ** queueNumber - PHI2 ** queueNumber) / sqrt5
    )

    return fibonacciNumber
}

const displayFibonacciNum = (queueNumber, handler, elem) => {
    const fibonacciNumber = handler(queueNumber)
    const output = elem

    output.innerText = `The Fibonacci number at the sequence number ${queueNumber} is: ${fibonacciNumber}`

    return output
}

export { calcFibonacciNum, displayFibonacciNum }
