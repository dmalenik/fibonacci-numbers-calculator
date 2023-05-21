const calcFibonacciNum = (queueNumber) => {
    // Binet formula
    const sqrt5 = Math.sqrt(5)
    const PHI1 = (1 + sqrt5) / 2
    const PHI2 = (1 - sqrt5) / 2
    const fibonacciNumber = Math.round(
        PHI1 ** queueNumber - PHI2 ** queueNumber / sqrt5
    )

    return fibonacciNumber
}

export default calcFibonacciNum
