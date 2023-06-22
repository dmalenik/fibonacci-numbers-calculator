const calcFibonacciNum = (queueNumber) => {
    // Binet formula
    const sqrt5 = Math.sqrt(5)
    const e1 = (1 + sqrt5) ** queueNumber
    const e2 = (1 - sqrt5) ** queueNumber
    const divider = 2 ** queueNumber * sqrt5
    const fibonacciNumber = (e1 - e2) / divider

    return Math.floor(fibonacciNumber)
}

export default calcFibonacciNum
