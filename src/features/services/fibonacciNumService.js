const calcFibonacciNum = (queueNumber) => {
    // Binet formula
    const sqrt5 = Math.sqrt(5)
    const e1 = ((1 + sqrt5) / 2) ** queueNumber
    const e2 = ((1 - sqrt5) / 2) ** queueNumber
    const fibonacciNumber = (e1 - e2) / sqrt5

    return Math.round(fibonacciNumber)
}

export default calcFibonacciNum
