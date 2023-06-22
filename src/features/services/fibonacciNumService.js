const calcFibonacciNum = (queueNumber) => {
    // Binet formula
    const sqrt5 = Math.sqrt(5)
    const PHI1 = (1 + sqrt5) / 2
    const PHI2 = (1 - sqrt5) / 2

    /*
     ** The 53-bit significand precision gives from 15 to 17 significant decimal digits precision (2−53 ≈ 1.11 × 10−16)
     **
     ** Precision limitations on integer values
     **
     ** Integers from −2^53 to 2^53 (−9,007,199,254,740,992 to 9,007,199,254,740,992) can be exactly represented
     ** Integers between 2^53 and 2^54 = 18,014,398,509,481,984 round to a multiple of 2 (even number)
     ** Integers between 2^54 and 2^55 = 36,028,797,018,963,968 round to a multiple of 4
     **
     ** See Also: https://en.wikipedia.org/wiki/Double-precision_floating-point_format#JavaScript
     **
     ** Number Encoding
     **
     ** The largest value a number can hold is 2^1024 - 1 (with the exponent being 1023 and the mantissa being 0.1111… in base 2),
     ** which is obtainable via Number.MAX_VALUE.
     ** Values higher than that are replaced with the special number constant Infinity.
     **
     ** See Also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
     */

    const fibonacciNumber = (PHI1 ** queueNumber - PHI2 ** queueNumber) / sqrt5

    return fibonacciNumber
}

export default calcFibonacciNum
