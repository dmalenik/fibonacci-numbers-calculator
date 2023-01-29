const calcFibonacciNum = (queueNumber) => {
    // Binet formula
    const sqrt5 = Math.sqrt(5)
    const phi_1 = (1 + sqrt5) / 2
    const phi_2 = (1 - sqrt5) / 2
    let fibonacciNumber = Math.round(
        (Math.pow(phi_1, queueNumber) - Math.pow(phi_2, queueNumber)) / sqrt5
    )

    return fibonacciNumber
}

module.exports = calcFibonacciNum
