const calcFibonacciNum = (queueNumber) => {
    const GOLDEN_RATIO = 1.618034
    let fibonacciNumber =
        (GOLDEN_RATIO ** queueNumber - (1 - GOLDEN_RATIO) ** queueNumber) /
        Math.sqrt(5)

    return Math.round(fibonacciNumber)
}

module.exports = calcFibonacciNum
